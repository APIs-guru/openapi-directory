import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FloodlightActivities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingFloodlightActivitiesDelete - Deletes an existing floodlight activity.
    **/
    dfareportingFloodlightActivitiesDelete(req: operations.DfareportingFloodlightActivitiesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesDeleteResponse>;
    /**
     * dfareportingFloodlightActivitiesGeneratetag - Generates a tag for a floodlight activity.
    **/
    dfareportingFloodlightActivitiesGeneratetag(req: operations.DfareportingFloodlightActivitiesGeneratetagRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesGeneratetagResponse>;
    /**
     * dfareportingFloodlightActivitiesGet - Gets one floodlight activity by ID.
    **/
    dfareportingFloodlightActivitiesGet(req: operations.DfareportingFloodlightActivitiesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesGetResponse>;
    /**
     * dfareportingFloodlightActivitiesInsert - Inserts a new floodlight activity.
    **/
    dfareportingFloodlightActivitiesInsert(req: operations.DfareportingFloodlightActivitiesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesInsertResponse>;
    /**
     * dfareportingFloodlightActivitiesList - Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
    **/
    dfareportingFloodlightActivitiesList(req: operations.DfareportingFloodlightActivitiesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesListResponse>;
    /**
     * dfareportingFloodlightActivitiesPatch - Updates an existing floodlight activity. This method supports patch semantics.
    **/
    dfareportingFloodlightActivitiesPatch(req: operations.DfareportingFloodlightActivitiesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesPatchResponse>;
    /**
     * dfareportingFloodlightActivitiesUpdate - Updates an existing floodlight activity.
    **/
    dfareportingFloodlightActivitiesUpdate(req: operations.DfareportingFloodlightActivitiesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivitiesUpdateResponse>;
}
