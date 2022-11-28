import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PlacementGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingPlacementGroupsGet - Gets one placement group by ID.
    **/
    dfareportingPlacementGroupsGet(req: operations.DfareportingPlacementGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementGroupsGetResponse>;
    /**
     * dfareportingPlacementGroupsInsert - Inserts a new placement group.
    **/
    dfareportingPlacementGroupsInsert(req: operations.DfareportingPlacementGroupsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementGroupsInsertResponse>;
    /**
     * dfareportingPlacementGroupsList - Retrieves a list of placement groups, possibly filtered. This method supports paging.
    **/
    dfareportingPlacementGroupsList(req: operations.DfareportingPlacementGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementGroupsListResponse>;
    /**
     * dfareportingPlacementGroupsPatch - Updates an existing placement group. This method supports patch semantics.
    **/
    dfareportingPlacementGroupsPatch(req: operations.DfareportingPlacementGroupsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementGroupsPatchResponse>;
    /**
     * dfareportingPlacementGroupsUpdate - Updates an existing placement group.
    **/
    dfareportingPlacementGroupsUpdate(req: operations.DfareportingPlacementGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementGroupsUpdateResponse>;
}
