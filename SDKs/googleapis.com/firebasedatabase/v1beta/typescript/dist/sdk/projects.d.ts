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
     * firebasedatabaseProjectsLocationsInstancesCreate - Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.
    **/
    firebasedatabaseProjectsLocationsInstancesCreate(req: operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesCreateResponse>;
    /**
     * firebasedatabaseProjectsLocationsInstancesDelete - Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.
    **/
    firebasedatabaseProjectsLocationsInstancesDelete(req: operations.FirebasedatabaseProjectsLocationsInstancesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesDeleteResponse>;
    /**
     * firebasedatabaseProjectsLocationsInstancesDisable - Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.
    **/
    firebasedatabaseProjectsLocationsInstancesDisable(req: operations.FirebasedatabaseProjectsLocationsInstancesDisableRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesDisableResponse>;
    /**
     * firebasedatabaseProjectsLocationsInstancesGet - Gets the DatabaseInstance identified by the specified resource name.
    **/
    firebasedatabaseProjectsLocationsInstancesGet(req: operations.FirebasedatabaseProjectsLocationsInstancesGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesGetResponse>;
    /**
     * firebasedatabaseProjectsLocationsInstancesList - Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.
    **/
    firebasedatabaseProjectsLocationsInstancesList(req: operations.FirebasedatabaseProjectsLocationsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesListResponse>;
    /**
     * firebasedatabaseProjectsLocationsInstancesReenable - Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.
    **/
    firebasedatabaseProjectsLocationsInstancesReenable(req: operations.FirebasedatabaseProjectsLocationsInstancesReenableRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesReenableResponse>;
    /**
     * firebasedatabaseProjectsLocationsInstancesUndelete - Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.
    **/
    firebasedatabaseProjectsLocationsInstancesUndelete(req: operations.FirebasedatabaseProjectsLocationsInstancesUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesUndeleteResponse>;
}
