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
     * managedidentitiesProjectsLocationsGlobalDomainsAttachTrust - Adds an AD trust to a domain.
    **/
    managedidentitiesProjectsLocationsGlobalDomainsAttachTrust(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate - Creates a Backup for a domain.
    **/
    managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsBackupsList - Lists Backup in a given project.
    **/
    managedidentitiesProjectsLocationsGlobalDomainsBackupsList(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission - CheckMigrationPermission API gets the current state of DomainMigration
    **/
    managedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsCreate - Creates a Microsoft AD domain.
    **/
    managedidentitiesProjectsLocationsGlobalDomainsCreate(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsDetachTrust - Removes an AD trust.
    **/
    managedidentitiesProjectsLocationsGlobalDomainsDetachTrust(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsDisableMigration - Disable Domain Migration
    **/
    managedidentitiesProjectsLocationsGlobalDomainsDisableMigration(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine - DomainJoinMachine API joins a Compute Engine VM to the domain
    **/
    managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsEnableMigration - Enable Domain Migration
    **/
    managedidentitiesProjectsLocationsGlobalDomainsEnableMigration(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsExtendSchema - Extend Schema for Domain
    **/
    managedidentitiesProjectsLocationsGlobalDomainsExtendSchema(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings - Gets the domain ldaps settings.
    **/
    managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsList - Lists domains in a project.
    **/
    managedidentitiesProjectsLocationsGlobalDomainsList(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsListRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsListResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust - Updates the DNS conditional forwarder.
    **/
    managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword - Resets a domain's administrator password.
    **/
    managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsRestore - RestoreBackup restores domain mentioned in the RestoreBackupRequest
    **/
    managedidentitiesProjectsLocationsGlobalDomainsRestore(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList - Lists SqlIntegrations in a given domain.
    **/
    managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings - Patches a single ldaps settings.
    **/
    managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalDomainsValidateTrust - Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.
    **/
    managedidentitiesProjectsLocationsGlobalDomainsValidateTrust(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    managedidentitiesProjectsLocationsGlobalOperationsCancel(req: operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalPeeringsCreate - Creates a Peering for Managed AD instance.
    **/
    managedidentitiesProjectsLocationsGlobalPeeringsCreate(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalPeeringsDelete - Deletes identified Peering.
    **/
    managedidentitiesProjectsLocationsGlobalPeeringsDelete(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalPeeringsGet - Gets details of a single Peering.
    **/
    managedidentitiesProjectsLocationsGlobalPeeringsGet(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalPeeringsList - Lists Peerings in a given project.
    **/
    managedidentitiesProjectsLocationsGlobalPeeringsList(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalPeeringsPatch - Updates the labels for specified Peering.
    **/
    managedidentitiesProjectsLocationsGlobalPeeringsPatch(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse>;
    /**
     * managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse>;
    /**
     * managedidentitiesProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    managedidentitiesProjectsLocationsList(req: operations.ManagedidentitiesProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsListResponse>;
}
