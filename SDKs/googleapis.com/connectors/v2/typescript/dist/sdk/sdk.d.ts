import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    ConnectorsProjectsLocationsConnectionsActionsExecute(req: operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsActionsExecuteResponse>;
    ConnectorsProjectsLocationsConnectionsActionsList(req: operations.ConnectorsProjectsLocationsConnectionsActionsListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsActionsListResponse>;
    ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateResponse>;
    ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse>;
    ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse>;
    ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGet(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetResponse>;
    ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesList(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse>;
    ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse>;
    ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsResponse>;
    ConnectorsProjectsLocationsConnectionsEntityTypesList(req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesListResponse>;
    ConnectorsProjectsLocationsConnectionsExecuteSqlQuery(req: operations.ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsExecuteSqlQueryResponse>;
}
export {};
