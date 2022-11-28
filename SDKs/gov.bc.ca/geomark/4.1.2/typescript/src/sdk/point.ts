import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Point {
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
   * getGeomarksGeomarkIdPointFileFormatExtension - Gets a single spatial point representative of the geomark.
   *
   * The geomark point resource returns a single spatial feature with a single Point and the geomark attribution.  The point geometry will be created from the first geometry part of the Geomark. Point geomarks will return the first Point part in the geomark.  LineString geomarks will return the first coordinate of the first LineString part in the geomark. Polygon geomarks will return the centroid or another point inside the first Polygon part in the geomark. The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.
  **/
  getGeomarksGeomarkIdPointFileFormatExtension(
    req: operations.GetGeomarksGeomarkIdPointFileFormatExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeomarksGeomarkIdPointFileFormatExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeomarksGeomarkIdPointFileFormatExtensionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/geomarks/{geomarkId}/point.{fileFormatExtension}", req.pathParams);
    
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
        const res: operations.GetGeomarksGeomarkIdPointFileFormatExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
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
