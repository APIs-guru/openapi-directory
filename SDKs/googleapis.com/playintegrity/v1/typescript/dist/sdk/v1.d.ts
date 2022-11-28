import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * playintegrityDecodeIntegrityToken - Decodes the integrity token and returns the token payload.
    **/
    playintegrityDecodeIntegrityToken(req: operations.PlayintegrityDecodeIntegrityTokenRequest, config?: AxiosRequestConfig): Promise<operations.PlayintegrityDecodeIntegrityTokenResponse>;
}
