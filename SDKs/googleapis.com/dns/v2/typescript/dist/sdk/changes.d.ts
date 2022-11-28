import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Changes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dnsChangesCreate - Atomically updates the ResourceRecordSet collection.
    **/
    dnsChangesCreate(req: operations.DnsChangesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DnsChangesCreateResponse>;
    /**
     * dnsChangesGet - Fetches the representation of an existing Change.
    **/
    dnsChangesGet(req: operations.DnsChangesGetRequest, config?: AxiosRequestConfig): Promise<operations.DnsChangesGetResponse>;
    /**
     * dnsChangesList - Enumerates Changes to a ResourceRecordSet collection.
    **/
    dnsChangesList(req: operations.DnsChangesListRequest, config?: AxiosRequestConfig): Promise<operations.DnsChangesListResponse>;
}
