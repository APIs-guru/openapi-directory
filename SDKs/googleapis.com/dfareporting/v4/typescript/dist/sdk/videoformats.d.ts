import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideoFormats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingVideoFormatsGet - Gets one video format by ID.
    **/
    dfareportingVideoFormatsGet(req: operations.DfareportingVideoFormatsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingVideoFormatsGetResponse>;
    /**
     * dfareportingVideoFormatsList - Lists available video formats.
    **/
    dfareportingVideoFormatsList(req: operations.DfareportingVideoFormatsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingVideoFormatsListResponse>;
}
