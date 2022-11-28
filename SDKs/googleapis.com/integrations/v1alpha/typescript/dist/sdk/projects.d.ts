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
     * integrationsProjectsLocationsAppsScriptProjectsCreate - Creates an Apps Script project.
    **/
    integrationsProjectsLocationsAppsScriptProjectsCreate(req: operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse>;
    /**
     * integrationsProjectsLocationsAppsScriptProjectsLink - Links a existing Apps Script project.
    **/
    integrationsProjectsLocationsAppsScriptProjectsLink(req: operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse>;
    /**
     * integrationsProjectsLocationsConnectionsList - Lists Connections in a given project and location.
    **/
    integrationsProjectsLocationsConnectionsList(req: operations.IntegrationsProjectsLocationsConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsConnectionsListResponse>;
    /**
     * integrationsProjectsLocationsConnectionsRuntimeActionSchemasList - Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
    **/
    integrationsProjectsLocationsConnectionsRuntimeActionSchemasList(req: operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse>;
    /**
     * integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList - Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
    **/
    integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList(req: operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse>;
    /**
     * integrationsProjectsLocationsProductsAuthConfigsCreate - Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
    **/
    integrationsProjectsLocationsProductsAuthConfigsCreate(req: operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse>;
    /**
     * integrationsProjectsLocationsProductsAuthConfigsList - Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
    **/
    integrationsProjectsLocationsProductsAuthConfigsList(req: operations.IntegrationsProjectsLocationsProductsAuthConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse>;
    /**
     * integrationsProjectsLocationsProductsCertificatesCreate - Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
    **/
    integrationsProjectsLocationsProductsCertificatesCreate(req: operations.IntegrationsProjectsLocationsProductsCertificatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse>;
    /**
     * integrationsProjectsLocationsProductsCertificatesList - List all the certificates that match the filter. Restrict to certificate of current client only.
    **/
    integrationsProjectsLocationsProductsCertificatesList(req: operations.IntegrationsProjectsLocationsProductsCertificatesListRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsCertificatesListResponse>;
    /**
     * integrationsProjectsLocationsProductsCreateBundle - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Create a bundle.
    **/
    integrationsProjectsLocationsProductsCreateBundle(req: operations.IntegrationsProjectsLocationsProductsCreateBundleRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsCreateBundleResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsArchiveBundle - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Soft-deletes the bundle.
    **/
    integrationsProjectsLocationsProductsIntegrationsArchiveBundle(req: operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsExecute - Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
    **/
    integrationsProjectsLocationsProductsIntegrationsExecute(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsExecutionsCancel - Cancellation of an execution
    **/
    integrationsProjectsLocationsProductsIntegrationsExecutionsCancel(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsExecutionsList - Lists the status of the integration executions.
    **/
    integrationsProjectsLocationsProductsIntegrationsExecutionsList(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift - * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
    **/
    integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList - * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
    **/
    integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve - * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
    **/
    integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsList - Lists the snapshots of a given integration executions. This RPC is not being used.
    **/
    integrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsList(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsList - Returns the list of all integrations in the specified project.
    **/
    integrationsProjectsLocationsProductsIntegrationsList(req: operations.IntegrationsProjectsLocationsProductsIntegrationsListRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsMonitorexecutionstats - Get execution stats
    **/
    integrationsProjectsLocationsProductsIntegrationsMonitorexecutionstats(req: operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsSchedule - Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
    **/
    integrationsProjectsLocationsProductsIntegrationsSchedule(req: operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsVersionsArchive - Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being archived is DRAFT, and if the `locked_by` user is not the same as the user performing the Archive. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Archiving a integration. Currently, there is no unarchive mechanism.
    **/
    integrationsProjectsLocationsProductsIntegrationsVersionsArchive(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsVersionsDeactivate - Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
    **/
    integrationsProjectsLocationsProductsIntegrationsVersionsDeactivate(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsVersionsDownload - Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
    **/
    integrationsProjectsLocationsProductsIntegrationsVersionsDownload(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsVersionsGetBundle - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. RPC to get details of the Bundle
    **/
    integrationsProjectsLocationsProductsIntegrationsVersionsGetBundle(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsVersionsPublish - This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
    **/
    integrationsProjectsLocationsProductsIntegrationsVersionsPublish(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock - Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
    **/
    integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundle - THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. RPC to update the Bundle
    **/
    integrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundle(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsVersionsUpload - Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
    **/
    integrationsProjectsLocationsProductsIntegrationsVersionsUpload(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationsVersionsValidate - Validates the given integration. If the id doesn't exist, a NotFoundException is thrown. If validation fails a CanonicalCodeException is thrown. If there was no failure an empty response is returned.
    **/
    integrationsProjectsLocationsProductsIntegrationsVersionsValidate(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate - Creates an IntegrationTemplateVersion.
    **/
    integrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate(req: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse>;
    /**
     * integrationsProjectsLocationsProductsIntegrationtemplatesVersionsList - Returns the list of all IntegrationTemplateVersions in the specified project.
    **/
    integrationsProjectsLocationsProductsIntegrationtemplatesVersionsList(req: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse>;
    /**
     * integrationsProjectsLocationsProductsListTaskEntities - This is a UI only method and will be moved away. Returns a list of common tasks.
    **/
    integrationsProjectsLocationsProductsListTaskEntities(req: operations.IntegrationsProjectsLocationsProductsListTaskEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsListTaskEntitiesResponse>;
    /**
     * integrationsProjectsLocationsSfdcInstancesCreate - Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
    **/
    integrationsProjectsLocationsSfdcInstancesCreate(req: operations.IntegrationsProjectsLocationsSfdcInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse>;
    /**
     * integrationsProjectsLocationsSfdcInstancesList - Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
    **/
    integrationsProjectsLocationsSfdcInstancesList(req: operations.IntegrationsProjectsLocationsSfdcInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesListResponse>;
    /**
     * integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate - Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
    **/
    integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate(req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse>;
    /**
     * integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete - Deletes an sfdc channel.
    **/
    integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete(req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse>;
    /**
     * integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet - Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
    **/
    integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet(req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse>;
    /**
     * integrationsProjectsLocationsSfdcInstancesSfdcChannelsList - Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
    **/
    integrationsProjectsLocationsSfdcInstancesSfdcChannelsList(req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse>;
    /**
     * integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch - Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
    **/
    integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch(req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse>;
}
