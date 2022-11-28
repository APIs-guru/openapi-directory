import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * monitoringServicesCreate - Create a Service.
    **/
    monitoringServicesCreate(req: operations.MonitoringServicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesCreateResponse>;
    /**
     * monitoringServicesList - List Services for this Metrics Scope.
    **/
    monitoringServicesList(req: operations.MonitoringServicesListRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesListResponse>;
    /**
     * monitoringServicesServiceLevelObjectivesCreate - Create a ServiceLevelObjective for the given Service.
    **/
    monitoringServicesServiceLevelObjectivesCreate(req: operations.MonitoringServicesServiceLevelObjectivesCreateRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesServiceLevelObjectivesCreateResponse>;
    /**
     * monitoringServicesServiceLevelObjectivesDelete - Delete the given ServiceLevelObjective.
    **/
    monitoringServicesServiceLevelObjectivesDelete(req: operations.MonitoringServicesServiceLevelObjectivesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesServiceLevelObjectivesDeleteResponse>;
    /**
     * monitoringServicesServiceLevelObjectivesGet - Get a ServiceLevelObjective by name.
    **/
    monitoringServicesServiceLevelObjectivesGet(req: operations.MonitoringServicesServiceLevelObjectivesGetRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesServiceLevelObjectivesGetResponse>;
    /**
     * monitoringServicesServiceLevelObjectivesList - List the ServiceLevelObjectives for the given Service.
    **/
    monitoringServicesServiceLevelObjectivesList(req: operations.MonitoringServicesServiceLevelObjectivesListRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesServiceLevelObjectivesListResponse>;
    /**
     * monitoringServicesServiceLevelObjectivesPatch - Update the given ServiceLevelObjective.
    **/
    monitoringServicesServiceLevelObjectivesPatch(req: operations.MonitoringServicesServiceLevelObjectivesPatchRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringServicesServiceLevelObjectivesPatchResponse>;
}
