import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Series {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * booksSeriesGet - Returns Series metadata for the given series ids.
    **/
    booksSeriesGet(req: operations.BooksSeriesGetRequest, config?: AxiosRequestConfig): Promise<operations.BooksSeriesGetResponse>;
    /**
     * booksSeriesMembershipGet - Returns Series membership data given the series id.
    **/
    booksSeriesMembershipGet(req: operations.BooksSeriesMembershipGetRequest, config?: AxiosRequestConfig): Promise<operations.BooksSeriesMembershipGetResponse>;
}
