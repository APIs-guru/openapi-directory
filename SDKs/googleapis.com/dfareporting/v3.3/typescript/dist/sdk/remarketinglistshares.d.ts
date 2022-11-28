import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RemarketingListShares {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingRemarketingListSharesGet - Gets one remarketing list share by remarketing list ID.
    **/
    dfareportingRemarketingListSharesGet(req: operations.DfareportingRemarketingListSharesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListSharesGetResponse>;
    /**
     * dfareportingRemarketingListSharesPatch - Updates an existing remarketing list share. This method supports patch semantics.
    **/
    dfareportingRemarketingListSharesPatch(req: operations.DfareportingRemarketingListSharesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListSharesPatchResponse>;
    /**
     * dfareportingRemarketingListSharesUpdate - Updates an existing remarketing list share.
    **/
    dfareportingRemarketingListSharesUpdate(req: operations.DfareportingRemarketingListSharesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListSharesUpdateResponse>;
}
