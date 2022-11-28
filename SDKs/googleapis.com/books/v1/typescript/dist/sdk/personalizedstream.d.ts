import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Personalizedstream {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * booksPersonalizedstreamGet - Returns a stream of personalized book clusters
    **/
    booksPersonalizedstreamGet(req: operations.BooksPersonalizedstreamGetRequest, config?: AxiosRequestConfig): Promise<operations.BooksPersonalizedstreamGetResponse>;
}
