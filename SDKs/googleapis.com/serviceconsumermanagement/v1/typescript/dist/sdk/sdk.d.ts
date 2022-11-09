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
    ServiceconsumermanagementOperationsCancel(req: operations.ServiceconsumermanagementOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementOperationsCancelResponse>;
    ServiceconsumermanagementOperationsList(req: operations.ServiceconsumermanagementOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementOperationsListResponse>;
    ServiceconsumermanagementServicesSearch(req: operations.ServiceconsumermanagementServicesSearchRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesSearchResponse>;
    ServiceconsumermanagementServicesTenancyUnitsAddProject(req: operations.ServiceconsumermanagementServicesTenancyUnitsAddProjectRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsAddProjectResponse>;
    ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfig(req: operations.ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigResponse>;
    ServiceconsumermanagementServicesTenancyUnitsAttachProject(req: operations.ServiceconsumermanagementServicesTenancyUnitsAttachProjectRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsAttachProjectResponse>;
    ServiceconsumermanagementServicesTenancyUnitsCreate(req: operations.ServiceconsumermanagementServicesTenancyUnitsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsCreateResponse>;
    ServiceconsumermanagementServicesTenancyUnitsDelete(req: operations.ServiceconsumermanagementServicesTenancyUnitsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsDeleteResponse>;
    ServiceconsumermanagementServicesTenancyUnitsDeleteProject(req: operations.ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsDeleteProjectResponse>;
    ServiceconsumermanagementServicesTenancyUnitsList(req: operations.ServiceconsumermanagementServicesTenancyUnitsListRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsListResponse>;
    ServiceconsumermanagementServicesTenancyUnitsRemoveProject(req: operations.ServiceconsumermanagementServicesTenancyUnitsRemoveProjectRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsRemoveProjectResponse>;
    ServiceconsumermanagementServicesTenancyUnitsUndeleteProject(req: operations.ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectResponse>;
}
export {};
