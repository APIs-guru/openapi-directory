import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Parcels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getParcelsPidsSiteIdOutputFormat - Get a comma-separated string of all pids for a given site
     *
     * Represents all parcel identifiers associated with an individual site
    **/
    getParcelsPidsSiteIdOutputFormat(req: operations.GetParcelsPidsSiteIdOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetParcelsPidsSiteIdOutputFormatResponse>;
}
