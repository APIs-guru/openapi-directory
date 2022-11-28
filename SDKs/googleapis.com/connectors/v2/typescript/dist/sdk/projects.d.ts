import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * connectorsProjectsLocationsConnectionsActionsExecute - Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
    **/
    connectorsProjectsLocationsConnectionsActionsExecute(req: operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsActionsExecuteResponse>;
    /**
     * connectorsProjectsLocationsConnectionsActionsList - Gets the schema of all the actions supported by the connector.
    **/
    connectorsProjectsLocationsConnectionsActionsList(req: operations.ConnectorsProjectsLocationsConnectionsActionsListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsActionsListResponse>;
    /**
     * connectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate - Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
    **/
    connectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateResponse>;
    /**
     * connectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete - Deletes an existing entity row matching the entity type and entity id specified in the request.
    **/
    connectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse>;
    /**
     * connectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions - Deletes entities based on conditions specified in the request and not on entity id.
    **/
    connectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse>;
    /**
     * connectorsProjectsLocationsConnectionsEntityTypesEntitiesGet - Gets a single entity row matching the entity type and entity id specified in the request.
    **/
    connectorsProjectsLocationsConnectionsEntityTypesEntitiesGet(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetResponse>;
    /**
     * connectorsProjectsLocationsConnectionsEntityTypesEntitiesList - Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
    **/
    connectorsProjectsLocationsConnectionsEntityTypesEntitiesList(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse>;
    /**
     * connectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch - Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
    **/
    connectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse>;
    /**
     * connectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions - Updates entities based on conditions specified in the request and not on entity id.
    **/
    connectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsResponse>;
    /**
     * connectorsProjectsLocationsConnectionsEntityTypesList - Lists metadata related to all entity types present in the external system.
    **/
    connectorsProjectsLocationsConnectionsEntityTypesList(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesListResponse>;
    /**
     * connectorsProjectsLocationsConnectionsExecuteSqlQuery - Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.
    **/
    connectorsProjectsLocationsConnectionsExecuteSqlQuery(req: operations.ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsExecuteSqlQueryResponse>;
}
