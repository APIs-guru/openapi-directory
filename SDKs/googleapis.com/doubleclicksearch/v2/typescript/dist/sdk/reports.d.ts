import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * doubleclicksearchReportsGenerate - Generates and returns a report immediately.
    **/
    doubleclicksearchReportsGenerate(req: operations.DoubleclicksearchReportsGenerateRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchReportsGenerateResponse>;
    /**
     * doubleclicksearchReportsGet - Polls for the status of a report request.
    **/
    doubleclicksearchReportsGet(req: operations.DoubleclicksearchReportsGetRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchReportsGetResponse>;
    /**
     * doubleclicksearchReportsGetFile - Downloads a report file encoded in UTF-8.
    **/
    doubleclicksearchReportsGetFile(req: operations.DoubleclicksearchReportsGetFileRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchReportsGetFileResponse>;
    /**
     * doubleclicksearchReportsGetIdMappingFile - Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
    **/
    doubleclicksearchReportsGetIdMappingFile(req: operations.DoubleclicksearchReportsGetIdMappingFileRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchReportsGetIdMappingFileResponse>;
    /**
     * doubleclicksearchReportsRequest - Inserts a report request into the reporting system.
    **/
    doubleclicksearchReportsRequest(req: operations.DoubleclicksearchReportsRequestRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchReportsRequestResponse>;
}
