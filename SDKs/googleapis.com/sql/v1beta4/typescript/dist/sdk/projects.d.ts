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
     * sqlProjectsInstancesRescheduleMaintenance - Reschedules the maintenance on the given instance.
    **/
    sqlProjectsInstancesRescheduleMaintenance(req: operations.SqlProjectsInstancesRescheduleMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.SqlProjectsInstancesRescheduleMaintenanceResponse>;
    /**
     * sqlProjectsInstancesStartExternalSync - Start External primary instance migration.
    **/
    sqlProjectsInstancesStartExternalSync(req: operations.SqlProjectsInstancesStartExternalSyncRequest, config?: AxiosRequestConfig): Promise<operations.SqlProjectsInstancesStartExternalSyncResponse>;
    /**
     * sqlProjectsInstancesVerifyExternalSyncSettings - Verify External primary instance external sync settings.
    **/
    sqlProjectsInstancesVerifyExternalSyncSettings(req: operations.SqlProjectsInstancesVerifyExternalSyncSettingsRequest, config?: AxiosRequestConfig): Promise<operations.SqlProjectsInstancesVerifyExternalSyncSettingsResponse>;
}
