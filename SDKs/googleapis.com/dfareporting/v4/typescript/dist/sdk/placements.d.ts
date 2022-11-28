import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Placements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingPlacementsGeneratetags - Generates tags for a placement.
    **/
    dfareportingPlacementsGeneratetags(req: operations.DfareportingPlacementsGeneratetagsRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementsGeneratetagsResponse>;
    /**
     * dfareportingPlacementsGet - Gets one placement by ID.
    **/
    dfareportingPlacementsGet(req: operations.DfareportingPlacementsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementsGetResponse>;
    /**
     * dfareportingPlacementsInsert - Inserts a new placement.
    **/
    dfareportingPlacementsInsert(req: operations.DfareportingPlacementsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementsInsertResponse>;
    /**
     * dfareportingPlacementsList - Retrieves a list of placements, possibly filtered. This method supports paging.
    **/
    dfareportingPlacementsList(req: operations.DfareportingPlacementsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementsListResponse>;
    /**
     * dfareportingPlacementsPatch - Updates an existing placement. This method supports patch semantics.
    **/
    dfareportingPlacementsPatch(req: operations.DfareportingPlacementsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementsPatchResponse>;
    /**
     * dfareportingPlacementsUpdate - Updates an existing placement.
    **/
    dfareportingPlacementsUpdate(req: operations.DfareportingPlacementsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementsUpdateResponse>;
}
