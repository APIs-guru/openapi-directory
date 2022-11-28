import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Distributions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDistributionsDistributionId - Delete a distribution.
     *
     * Delete a distribution.
     *
     * This is only for admins.
     *
    **/
    deleteDistributionsDistributionId(req: operations.DeleteDistributionsDistributionIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDistributionsDistributionIdResponse>;
    /**
     * getDistributions - List all distributions.
     *
     * List all distributions that can be build against.
     * This will not list distributions that are available via [interconnect](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.concepts.html#id-1.5.10.3.5).
     * Check /distributions/include_remotes for this.
     *
    **/
    getDistributions(req: operations.GetDistributionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionsResponse>;
    /**
     * getDistributionsDistributionId - Show a distribution.
     *
     * Show a distribution that can be build against.
     *
    **/
    getDistributionsDistributionId(req: operations.GetDistributionsDistributionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionsDistributionIdResponse>;
    /**
     * getDistributionsIncludeRemotes - List all distributions including remote.
     *
     * List all distributions that can be build against, including the ones provided by the interconnect.
     *
    **/
    getDistributionsIncludeRemotes(req: operations.GetDistributionsIncludeRemotesRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionsIncludeRemotesResponse>;
    /**
     * postDistributions - Create a distribution.
     *
     * Create a distribution.
     *
     * This is only for admins.
     *
    **/
    postDistributions(req: operations.PostDistributionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDistributionsResponse>;
    /**
     * putDistributionsBulkReplace - Bulk replace all distributions.
     *
     * Bulk replace all distributions.
     *
     * This is only for admins.
     *
    **/
    putDistributionsBulkReplace(req: operations.PutDistributionsBulkReplaceRequest, config?: AxiosRequestConfig): Promise<operations.PutDistributionsBulkReplaceResponse>;
    /**
     * putDistributionsDistributionId - Update a distribution.
     *
     * Update the data of a distribution.
    **/
    putDistributionsDistributionId(req: operations.PutDistributionsDistributionIdRequest, config?: AxiosRequestConfig): Promise<operations.PutDistributionsDistributionIdResponse>;
}
