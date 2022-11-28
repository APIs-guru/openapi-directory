import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Elections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * civicinfoElectionsElectionQuery - List of available elections to query.
    **/
    civicinfoElectionsElectionQuery(req: operations.CivicinfoElectionsElectionQueryRequest, config?: AxiosRequestConfig): Promise<operations.CivicinfoElectionsElectionQueryResponse>;
    /**
     * civicinfoElectionsVoterInfoQuery - Looks up information relevant to a voter based on the voter's registered address.
    **/
    civicinfoElectionsVoterInfoQuery(req: operations.CivicinfoElectionsVoterInfoQueryRequest, config?: AxiosRequestConfig): Promise<operations.CivicinfoElectionsVoterInfoQueryResponse>;
}
