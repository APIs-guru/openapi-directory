import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Representatives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * civicinfoRepresentativesRepresentativeInfoByAddress - Looks up political geography and representative information for a single address.
    **/
    civicinfoRepresentativesRepresentativeInfoByAddress(req: operations.CivicinfoRepresentativesRepresentativeInfoByAddressRequest, config?: AxiosRequestConfig): Promise<operations.CivicinfoRepresentativesRepresentativeInfoByAddressResponse>;
    /**
     * civicinfoRepresentativesRepresentativeInfoByDivision - Looks up representative information for a single geographic division.
    **/
    civicinfoRepresentativesRepresentativeInfoByDivision(req: operations.CivicinfoRepresentativesRepresentativeInfoByDivisionRequest, config?: AxiosRequestConfig): Promise<operations.CivicinfoRepresentativesRepresentativeInfoByDivisionResponse>;
}
