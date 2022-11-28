import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class RoutingApi {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getRouteInfo - Coverage information
   *
   * Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server.
   * 
  **/
  getRouteInfo(
    config?: AxiosRequestConfig
  ): Promise<operations.GetRouteInfoResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/route/info";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRouteInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.infoResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRoute - GET Route Endpoint
   *
   * The GET request is the most simple one: just specify the parameter in the URL and you are done.
   * Can be tried directly in every browser.
   * 
  **/
  getRoute(
    req: operations.GetRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/route";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRouteResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.routeResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRoute - POST Route Endpoint
   *
   * Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started.
   * If you are familiar with POST requests and JSON then do not hesitate to continue here.
   * 
   * Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint
   * has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly
   * speed up the request.
   * 
   * To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request.
   * The effected parameters are: `points`, `point_hints` and `snap_preventions`.
   * 
   * **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.
   * 
   * For example `point=10,11&point=20,22` will be converted to the `points` array (plural):
   * ```json
   * { "points": [[11,10], [22,20]] }
   * ```
   * Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]`
   * similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).
   * 
   * Example:
   * ```bash
   * curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/route?key=[YOUR_KEY]" -d '{"elevation":false,"points":[[-0.087891,51.534377],[-0.090637,51.467697]],"vehicle":"car"}'
   * ```
   * 
  **/
  postRoute(
    req: operations.PostRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/route";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRouteResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.routeResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
