import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Matters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * vaultMattersAddPermissions - Adds an account as a matter collaborator.
    **/
    vaultMattersAddPermissions(req: operations.VaultMattersAddPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersAddPermissionsResponse>;
    /**
     * vaultMattersClose - Closes the specified matter. Returns the matter with updated state.
    **/
    vaultMattersClose(req: operations.VaultMattersCloseRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersCloseResponse>;
    /**
     * vaultMattersCount - Counts the accounts processed by the specified query.
    **/
    vaultMattersCount(req: operations.VaultMattersCountRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersCountResponse>;
    /**
     * vaultMattersCreate - Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
    **/
    vaultMattersCreate(req: operations.VaultMattersCreateRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersCreateResponse>;
    /**
     * vaultMattersDelete - Deletes the specified matter. Returns the matter with updated state.
    **/
    vaultMattersDelete(req: operations.VaultMattersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersDeleteResponse>;
    /**
     * vaultMattersExportsCreate - Creates an export.
    **/
    vaultMattersExportsCreate(req: operations.VaultMattersExportsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersExportsCreateResponse>;
    /**
     * vaultMattersExportsDelete - Deletes an export.
    **/
    vaultMattersExportsDelete(req: operations.VaultMattersExportsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersExportsDeleteResponse>;
    /**
     * vaultMattersExportsGet - Gets an export.
    **/
    vaultMattersExportsGet(req: operations.VaultMattersExportsGetRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersExportsGetResponse>;
    /**
     * vaultMattersExportsList - Lists details about the exports in the specified matter.
    **/
    vaultMattersExportsList(req: operations.VaultMattersExportsListRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersExportsListResponse>;
    /**
     * vaultMattersGet - Gets the specified matter.
    **/
    vaultMattersGet(req: operations.VaultMattersGetRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersGetResponse>;
    /**
     * vaultMattersHoldsAccountsCreate - Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
    **/
    vaultMattersHoldsAccountsCreate(req: operations.VaultMattersHoldsAccountsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsAccountsCreateResponse>;
    /**
     * vaultMattersHoldsAccountsDelete - Removes an account from a hold.
    **/
    vaultMattersHoldsAccountsDelete(req: operations.VaultMattersHoldsAccountsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsAccountsDeleteResponse>;
    /**
     * vaultMattersHoldsAccountsList - Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
    **/
    vaultMattersHoldsAccountsList(req: operations.VaultMattersHoldsAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsAccountsListResponse>;
    /**
     * vaultMattersHoldsAddHeldAccounts - Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
    **/
    vaultMattersHoldsAddHeldAccounts(req: operations.VaultMattersHoldsAddHeldAccountsRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsAddHeldAccountsResponse>;
    /**
     * vaultMattersHoldsCreate - Creates a hold in the specified matter.
    **/
    vaultMattersHoldsCreate(req: operations.VaultMattersHoldsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsCreateResponse>;
    /**
     * vaultMattersHoldsDelete - Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
    **/
    vaultMattersHoldsDelete(req: operations.VaultMattersHoldsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsDeleteResponse>;
    /**
     * vaultMattersHoldsGet - Gets the specified hold.
    **/
    vaultMattersHoldsGet(req: operations.VaultMattersHoldsGetRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsGetResponse>;
    /**
     * vaultMattersHoldsList - Lists the holds in a matter.
    **/
    vaultMattersHoldsList(req: operations.VaultMattersHoldsListRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsListResponse>;
    /**
     * vaultMattersHoldsRemoveHeldAccounts - Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
    **/
    vaultMattersHoldsRemoveHeldAccounts(req: operations.VaultMattersHoldsRemoveHeldAccountsRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsRemoveHeldAccountsResponse>;
    /**
     * vaultMattersHoldsUpdate - Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
    **/
    vaultMattersHoldsUpdate(req: operations.VaultMattersHoldsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsUpdateResponse>;
    /**
     * vaultMattersList - Lists matters the requestor has access to.
    **/
    vaultMattersList(req: operations.VaultMattersListRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersListResponse>;
    /**
     * vaultMattersRemovePermissions - Removes an account as a matter collaborator.
    **/
    vaultMattersRemovePermissions(req: operations.VaultMattersRemovePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersRemovePermissionsResponse>;
    /**
     * vaultMattersReopen - Reopens the specified matter. Returns the matter with updated state.
    **/
    vaultMattersReopen(req: operations.VaultMattersReopenRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersReopenResponse>;
    /**
     * vaultMattersSavedQueriesCreate - Creates a saved query.
    **/
    vaultMattersSavedQueriesCreate(req: operations.VaultMattersSavedQueriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersSavedQueriesCreateResponse>;
    /**
     * vaultMattersSavedQueriesDelete - Deletes the specified saved query.
    **/
    vaultMattersSavedQueriesDelete(req: operations.VaultMattersSavedQueriesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersSavedQueriesDeleteResponse>;
    /**
     * vaultMattersSavedQueriesGet - Retrieves the specified saved query.
    **/
    vaultMattersSavedQueriesGet(req: operations.VaultMattersSavedQueriesGetRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersSavedQueriesGetResponse>;
    /**
     * vaultMattersSavedQueriesList - Lists the saved queries in a matter.
    **/
    vaultMattersSavedQueriesList(req: operations.VaultMattersSavedQueriesListRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersSavedQueriesListResponse>;
    /**
     * vaultMattersUndelete - Undeletes the specified matter. Returns the matter with updated state.
    **/
    vaultMattersUndelete(req: operations.VaultMattersUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersUndeleteResponse>;
    /**
     * vaultMattersUpdate - Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.
    **/
    vaultMattersUpdate(req: operations.VaultMattersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VaultMattersUpdateResponse>;
}
