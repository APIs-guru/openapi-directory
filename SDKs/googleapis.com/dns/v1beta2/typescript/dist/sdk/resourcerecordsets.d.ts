import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ResourceRecordSets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dnsResourceRecordSetsCreate - Creates a new ResourceRecordSet.
    **/
    dnsResourceRecordSetsCreate(req: operations.DnsResourceRecordSetsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DnsResourceRecordSetsCreateResponse>;
    /**
     * dnsResourceRecordSetsDelete - Deletes a previously created ResourceRecordSet.
    **/
    dnsResourceRecordSetsDelete(req: operations.DnsResourceRecordSetsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DnsResourceRecordSetsDeleteResponse>;
    /**
     * dnsResourceRecordSetsGet - Fetches the representation of an existing ResourceRecordSet.
    **/
    dnsResourceRecordSetsGet(req: operations.DnsResourceRecordSetsGetRequest, config?: AxiosRequestConfig): Promise<operations.DnsResourceRecordSetsGetResponse>;
    /**
     * dnsResourceRecordSetsList - Enumerates ResourceRecordSets that you have created but not yet deleted.
    **/
    dnsResourceRecordSetsList(req: operations.DnsResourceRecordSetsListRequest, config?: AxiosRequestConfig): Promise<operations.DnsResourceRecordSetsListResponse>;
    /**
     * dnsResourceRecordSetsPatch - Applies a partial update to an existing ResourceRecordSet.
    **/
    dnsResourceRecordSetsPatch(req: operations.DnsResourceRecordSetsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DnsResourceRecordSetsPatchResponse>;
}
