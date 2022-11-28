import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PlacementStrategies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingPlacementStrategiesDelete - Deletes an existing placement strategy.
    **/
    dfareportingPlacementStrategiesDelete(req: operations.DfareportingPlacementStrategiesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementStrategiesDeleteResponse>;
    /**
     * dfareportingPlacementStrategiesGet - Gets one placement strategy by ID.
    **/
    dfareportingPlacementStrategiesGet(req: operations.DfareportingPlacementStrategiesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementStrategiesGetResponse>;
    /**
     * dfareportingPlacementStrategiesInsert - Inserts a new placement strategy.
    **/
    dfareportingPlacementStrategiesInsert(req: operations.DfareportingPlacementStrategiesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementStrategiesInsertResponse>;
    /**
     * dfareportingPlacementStrategiesList - Retrieves a list of placement strategies, possibly filtered. This method supports paging.
    **/
    dfareportingPlacementStrategiesList(req: operations.DfareportingPlacementStrategiesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementStrategiesListResponse>;
    /**
     * dfareportingPlacementStrategiesPatch - Updates an existing placement strategy. This method supports patch semantics.
    **/
    dfareportingPlacementStrategiesPatch(req: operations.DfareportingPlacementStrategiesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementStrategiesPatchResponse>;
    /**
     * dfareportingPlacementStrategiesUpdate - Updates an existing placement strategy.
    **/
    dfareportingPlacementStrategiesUpdate(req: operations.DfareportingPlacementStrategiesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementStrategiesUpdateResponse>;
}
