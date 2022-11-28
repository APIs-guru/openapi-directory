import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Terraintiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * vectortileTerraintilesGet - Gets a terrain tile by its tile resource name.
    **/
    vectortileTerraintilesGet(req: operations.VectortileTerraintilesGetRequest, config?: AxiosRequestConfig): Promise<operations.VectortileTerraintilesGetResponse>;
}
