import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Hackathons {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getHackathonsIdFormat - Return the detail of a given hackathon
    **/
    getHackathonsIdFormat(req: operations.GetHackathonsIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetHackathonsIdFormatResponse>;
    /**
     * getHackathonsComingFormat - Return a list of coming hackathons
    **/
    getHackathonsComingFormat(req: operations.GetHackathonsComingFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetHackathonsComingFormatResponse>;
}
