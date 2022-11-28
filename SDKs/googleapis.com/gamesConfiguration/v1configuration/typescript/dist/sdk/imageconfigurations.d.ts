import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ImageConfigurations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesConfigurationImageConfigurationsUpload - Uploads an image for a resource with the given ID and image type.
    **/
    gamesConfigurationImageConfigurationsUpload(req: operations.GamesConfigurationImageConfigurationsUploadRequest, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationImageConfigurationsUploadResponse>;
}
