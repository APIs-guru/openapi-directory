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
     * serviceconsumermanagementServicesSearch - Search tenancy units for a managed service.
    **/
    serviceconsumermanagementServicesSearch(req: operations.ServiceconsumermanagementServicesSearchRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesSearchResponse>;
    /**
     * serviceconsumermanagementServicesTenancyUnitsAddProject - Add a new tenant project to the tenancy unit. There can be a maximum of 1024 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation.
    **/
    serviceconsumermanagementServicesTenancyUnitsAddProject(req: operations.ServiceconsumermanagementServicesTenancyUnitsAddProjectRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsAddProjectResponse>;
    /**
     * serviceconsumermanagementServicesTenancyUnitsApplyProjectConfig - Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified. Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already applied configuration changes is attempted. Operation.
    **/
    serviceconsumermanagementServicesTenancyUnitsApplyProjectConfig(req: operations.ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigResponse>;
    /**
     * serviceconsumermanagementServicesTenancyUnitsAttachProject - Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two requirements are already met if the project is reserved by calling `AddTenantProject`. Operation.
    **/
    serviceconsumermanagementServicesTenancyUnitsAttachProject(req: operations.ServiceconsumermanagementServicesTenancyUnitsAttachProjectRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsAttachProjectResponse>;
    /**
     * serviceconsumermanagementServicesTenancyUnitsCreate - Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field set and ListTenancyUnits has to be used to get a complete TenancyUnit with all fields populated.
    **/
    serviceconsumermanagementServicesTenancyUnitsCreate(req: operations.ServiceconsumermanagementServicesTenancyUnitsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsCreateResponse>;
    /**
     * serviceconsumermanagementServicesTenancyUnitsDelete - Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation.
    **/
    serviceconsumermanagementServicesTenancyUnitsDelete(req: operations.ServiceconsumermanagementServicesTenancyUnitsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsDeleteResponse>;
    /**
     * serviceconsumermanagementServicesTenancyUnitsDeleteProject - Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED. To permanently remove resource metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation.
    **/
    serviceconsumermanagementServicesTenancyUnitsDeleteProject(req: operations.ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsDeleteProjectResponse>;
    /**
     * serviceconsumermanagementServicesTenancyUnitsList - Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when creating VMs. Service producers must persist the tenant project's information after the project is created.
    **/
    serviceconsumermanagementServicesTenancyUnitsList(req: operations.ServiceconsumermanagementServicesTenancyUnitsListRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsListResponse>;
    /**
     * serviceconsumermanagementServicesTenancyUnitsRemoveProject - Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation.
    **/
    serviceconsumermanagementServicesTenancyUnitsRemoveProject(req: operations.ServiceconsumermanagementServicesTenancyUnitsRemoveProjectRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsRemoveProjectResponse>;
    /**
     * serviceconsumermanagementServicesTenancyUnitsUndeleteProject - Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation.
    **/
    serviceconsumermanagementServicesTenancyUnitsUndeleteProject(req: operations.ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectResponse>;
}
