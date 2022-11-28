# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IntegrationsCallbackGenerateTokenRequest(
    security=operations.IntegrationsCallbackGenerateTokenSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.IntegrationsCallbackGenerateTokenQueryParams(
        dollar_xgafv="1",
        access_token="voluptatem",
        alt="json",
        callback="iusto",
        code="ut",
        fields="ipsam",
        gcp_project_id="aut",
        key="consequatur",
        oauth_token="magni",
        pretty_print=True,
        product="APIGEE",
        quota_user="sed",
        redirect_uri="eos",
        state="quo",
        upload_type="omnis",
        upload_protocol="nulla",
    ),
)
    
res = s.callback.integrations_callback_generate_token(req)

if res.google_cloud_integrations_v1alpha_generate_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### callback

* `integrations_callback_generate_token` - Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.

### connectorPlatformRegions

* `integrations_connector_platform_regions_enumerate` - Enumerates the regions for which Connector Platform is provisioned.

### projects

* `integrations_projects_locations_apps_script_projects_create` - Creates an Apps Script project.
* `integrations_projects_locations_apps_script_projects_link` - Links a existing Apps Script project.
* `integrations_projects_locations_connections_list` - Lists Connections in a given project and location.
* `integrations_projects_locations_connections_runtime_action_schemas_list` - Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
* `integrations_projects_locations_connections_runtime_entity_schemas_list` - Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
* `integrations_projects_locations_products_auth_configs_create` - Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
* `integrations_projects_locations_products_auth_configs_list` - Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
* `integrations_projects_locations_products_certificates_create` - Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
* `integrations_projects_locations_products_certificates_list` - List all the certificates that match the filter. Restrict to certificate of current client only.
* `integrations_projects_locations_products_create_bundle` - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Create a bundle.
* `integrations_projects_locations_products_integrations_archive_bundle` - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Soft-deletes the bundle.
* `integrations_projects_locations_products_integrations_execute` - Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
* `integrations_projects_locations_products_integrations_executions_cancel` - Cancellation of an execution
* `integrations_projects_locations_products_integrations_executions_list` - Lists the status of the integration executions.
* `integrations_projects_locations_products_integrations_executions_suspensions_lift` - * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
* `integrations_projects_locations_products_integrations_executions_suspensions_list` - * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
* `integrations_projects_locations_products_integrations_executions_suspensions_resolve` - * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
* `integrations_projects_locations_products_integrations_executionsnapshots_list` - Lists the snapshots of a given integration executions. This RPC is not being used.
* `integrations_projects_locations_products_integrations_list` - Returns the list of all integrations in the specified project.
* `integrations_projects_locations_products_integrations_monitorexecutionstats` - Get execution stats
* `integrations_projects_locations_products_integrations_schedule` - Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
* `integrations_projects_locations_products_integrations_versions_archive` - Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being archived is DRAFT, and if the `locked_by` user is not the same as the user performing the Archive. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Archiving a integration. Currently, there is no unarchive mechanism.
* `integrations_projects_locations_products_integrations_versions_deactivate` - Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
* `integrations_projects_locations_products_integrations_versions_download` - Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
* `integrations_projects_locations_products_integrations_versions_get_bundle` - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. RPC to get details of the Bundle
* `integrations_projects_locations_products_integrations_versions_publish` - This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
* `integrations_projects_locations_products_integrations_versions_takeover_edit_lock` - Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
* `integrations_projects_locations_products_integrations_versions_update_bundle` - THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. RPC to update the Bundle
* `integrations_projects_locations_products_integrations_versions_upload` - Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
* `integrations_projects_locations_products_integrations_versions_validate` - Validates the given integration. If the id doesn't exist, a NotFoundException is thrown. If validation fails a CanonicalCodeException is thrown. If there was no failure an empty response is returned.
* `integrations_projects_locations_products_integrationtemplates_versions_create` - Creates an IntegrationTemplateVersion.
* `integrations_projects_locations_products_integrationtemplates_versions_list` - Returns the list of all IntegrationTemplateVersions in the specified project.
* `integrations_projects_locations_products_list_task_entities` - This is a UI only method and will be moved away. Returns a list of common tasks.
* `integrations_projects_locations_sfdc_instances_create` - Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
* `integrations_projects_locations_sfdc_instances_list` - Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
* `integrations_projects_locations_sfdc_instances_sfdc_channels_create` - Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
* `integrations_projects_locations_sfdc_instances_sfdc_channels_delete` - Deletes an sfdc channel.
* `integrations_projects_locations_sfdc_instances_sfdc_channels_get` - Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
* `integrations_projects_locations_sfdc_instances_sfdc_channels_list` - Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
* `integrations_projects_locations_sfdc_instances_sfdc_channels_patch` - Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
