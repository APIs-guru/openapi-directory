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
    
req = operations.CloudidentityCustomersUserinvitationsCancelRequest(
    path_params=operations.CloudidentityCustomersUserinvitationsCancelPathParams(
        name="et",
    ),
    query_params=operations.CloudidentityCustomersUserinvitationsCancelQueryParams(
        dollar_xgafv="2",
        access_token="enim",
        alt="proto",
        callback="incidunt",
        fields="amet",
        key="architecto",
        oauth_token="et",
        pretty_print=False,
        quota_user="ducimus",
        upload_type="doloribus",
        upload_protocol="sit",
    ),
    request={
        "ipsum": "voluptas",
        "aut": "praesentium",
        "reiciendis": "consequatur",
    },
)
    
res = s.customers.cloudidentity_customers_userinvitations_cancel(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### customers

* `cloudidentity_customers_userinvitations_cancel` - Cancels a UserInvitation that was already sent.
* `cloudidentity_customers_userinvitations_is_invitable_user` - Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account). Eligibility is based on the following criteria: * the email address is a consumer account and it's the primary email address of the account, and * the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible. **Note:** This method is not supported for Workspace Essentials customers.
* `cloudidentity_customers_userinvitations_list` - Retrieves a list of UserInvitation resources. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.
* `cloudidentity_customers_userinvitations_send` - Sends a UserInvitation to email. If the `UserInvitation` does not exist for this request and it is a valid request, the request creates a `UserInvitation`. **Note:** The `get` and `list` methods have a 48-hour delay where newly-created consumer accounts will not appear in the results. You can still send a `UserInvitation` to those accounts if you know the unmanaged email address and IsInvitableUser==True.

### devices

* `cloudidentity_devices_create` - Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
* `cloudidentity_devices_device_users_approve` - Approves device to access user data.
* `cloudidentity_devices_device_users_block` - Blocks device from accessing user data
* `cloudidentity_devices_device_users_cancel_wipe` - Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
* `cloudidentity_devices_device_users_list` - Lists/Searches DeviceUsers.
* `cloudidentity_devices_device_users_lookup` - Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
* `cloudidentity_devices_device_users_wipe` - Wipes the user's account on a device.
* `cloudidentity_devices_list` - Lists/Searches devices.

### groups

* `cloudidentity_groups_create` - Creates a `Group`.
* `cloudidentity_groups_list` - Lists the `Group` resources under a customer or namespace.
* `cloudidentity_groups_lookup` - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
* `cloudidentity_groups_memberships_check_transitive_membership` - Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.
* `cloudidentity_groups_memberships_create` - Creates a `Membership`.
* `cloudidentity_groups_memberships_get_membership_graph` - Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.
* `cloudidentity_groups_memberships_lookup` - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
* `cloudidentity_groups_memberships_modify_membership_roles` - Modifies the `MembershipRole`s of a `Membership`.
* `cloudidentity_groups_memberships_search_transitive_groups` - Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
* `cloudidentity_groups_memberships_search_transitive_memberships` - Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.
* `cloudidentity_groups_search` - Searches for `Group` resources matching a specified query.

### inboundSamlSsoProfiles

* `cloudidentity_inbound_saml_sso_profiles_create` - Creates an InboundSamlSsoProfile for a customer.
* `cloudidentity_inbound_saml_sso_profiles_idp_credentials_add` - Adds an IdpCredential. Up to 2 credentials are allowed.
* `cloudidentity_inbound_saml_sso_profiles_idp_credentials_list` - Returns a list of IdpCredentials in an InboundSamlSsoProfile.
* `cloudidentity_inbound_saml_sso_profiles_list` - Lists InboundSamlSsoProfiles for a customer.

### inboundSsoAssignments

* `cloudidentity_inbound_sso_assignments_create` - Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.
* `cloudidentity_inbound_sso_assignments_delete` - Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.
* `cloudidentity_inbound_sso_assignments_get` - Gets an InboundSsoAssignment.
* `cloudidentity_inbound_sso_assignments_list` - Lists the InboundSsoAssignments for a `Customer`.
* `cloudidentity_inbound_sso_assignments_patch` - Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1beta1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.

### orgUnits

* `cloudidentity_org_units_memberships_list` - List OrgMembership resources in an OrgUnit treated as 'parent'. Parent format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits)
* `cloudidentity_org_units_memberships_move` - Move an OrgMembership to a new OrgUnit. NOTE: This is an atomic copy-and-delete. The resource will have a new copy under the destination OrgUnit and be deleted from the source OrgUnit. The resource can only be searched under the destination OrgUnit afterwards.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
