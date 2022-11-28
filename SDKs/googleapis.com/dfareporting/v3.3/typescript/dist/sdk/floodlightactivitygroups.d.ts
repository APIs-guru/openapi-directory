import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FloodlightActivityGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingFloodlightActivityGroupsGet - Gets one floodlight activity group by ID.
    **/
    dfareportingFloodlightActivityGroupsGet(req: operations.DfareportingFloodlightActivityGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivityGroupsGetResponse>;
    /**
     * dfareportingFloodlightActivityGroupsInsert - Inserts a new floodlight activity group.
    **/
    dfareportingFloodlightActivityGroupsInsert(req: operations.DfareportingFloodlightActivityGroupsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivityGroupsInsertResponse>;
    /**
     * dfareportingFloodlightActivityGroupsList - Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
    **/
    dfareportingFloodlightActivityGroupsList(req: operations.DfareportingFloodlightActivityGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivityGroupsListResponse>;
    /**
     * dfareportingFloodlightActivityGroupsPatch - Updates an existing floodlight activity group. This method supports patch semantics.
    **/
    dfareportingFloodlightActivityGroupsPatch(req: operations.DfareportingFloodlightActivityGroupsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivityGroupsPatchResponse>;
    /**
     * dfareportingFloodlightActivityGroupsUpdate - Updates an existing floodlight activity group.
    **/
    dfareportingFloodlightActivityGroupsUpdate(req: operations.DfareportingFloodlightActivityGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivityGroupsUpdateResponse>;
}
