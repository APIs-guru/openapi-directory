import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Feature {
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
   * getGeomarksGeomarkIdFeatureFileFormatExtension - Get the feature and attribution of the geomark
   *
   * The geomark feature resource returns a single spatial feature with either a single (Point, LineString, Polygon) or multi-part geometry (MultiPoint, MultiLineString, MultiPolygon) and the geomark attribution.  The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.
  **/
  getGeomarksGeomarkIdFeatureFileFormatExtension(
    req: operations.GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/geomarks/{geomarkId}/feature.{fileFormatExtension}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
