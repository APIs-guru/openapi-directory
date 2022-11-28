# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CloudidentityCustomersUserinvitationsCancelRequest{
        PathParams: operations.CloudidentityCustomersUserinvitationsCancelPathParams{
            Name: "qui",
        },
        QueryParams: operations.CloudidentityCustomersUserinvitationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "json",
            Callback: "alias",
            Fields: "beatae",
            Key: "eveniet",
            OauthToken: "ab",
            PrettyPrint: true,
            QuotaUser: "deleniti",
            UploadType: "adipisci",
            UploadProtocol: "nam",
        },
        Request: map[string]interface{}{
            "aut": "esse",
            "animi": "hic",
        },
    }
    
    res, err := s.Customers.CloudidentityCustomersUserinvitationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### customers

* `CloudidentityCustomersUserinvitationsCancel` - Cancels a UserInvitation that was already sent.
* `CloudidentityCustomersUserinvitationsIsInvitableUser` - Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account). Eligibility is based on the following criteria: * the email address is a consumer account and it's the primary email address of the account, and * the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible. **Note:** This method is not supported for Workspace Essentials customers.
* `CloudidentityCustomersUserinvitationsList` - Retrieves a list of UserInvitation resources. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.
* `CloudidentityCustomersUserinvitationsSend` - Sends a UserInvitation to email. If the `UserInvitation` does not exist for this request and it is a valid request, the request creates a `UserInvitation`. **Note:** The `get` and `list` methods have a 48-hour delay where newly-created consumer accounts will not appear in the results. You can still send a `UserInvitation` to those accounts if you know the unmanaged email address and IsInvitableUser==True.

### devices

* `CloudidentityDevicesCreate` - Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
* `CloudidentityDevicesDeviceUsersApprove` - Approves device to access user data.
* `CloudidentityDevicesDeviceUsersBlock` - Blocks device from accessing user data
* `CloudidentityDevicesDeviceUsersCancelWipe` - Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
* `CloudidentityDevicesDeviceUsersClientStatesList` - Lists the client states for the given search query.
* `CloudidentityDevicesDeviceUsersList` - Lists/Searches DeviceUsers.
* `CloudidentityDevicesDeviceUsersLookup` - Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
* `CloudidentityDevicesDeviceUsersWipe` - Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.
* `CloudidentityDevicesList` - Lists/Searches devices.

### groups

* `CloudidentityGroupsCreate` - Creates a Group.
* `CloudidentityGroupsList` - Lists the `Group` resources under a customer or namespace.
* `CloudidentityGroupsLookup` - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
* `CloudidentityGroupsMembershipsCheckTransitiveMembership` - Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.
* `CloudidentityGroupsMembershipsCreate` - Creates a `Membership`.
* `CloudidentityGroupsMembershipsDelete` - Deletes a `Membership`.
* `CloudidentityGroupsMembershipsGet` - Retrieves a `Membership`.
* `CloudidentityGroupsMembershipsGetMembershipGraph` - Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.
* `CloudidentityGroupsMembershipsList` - Lists the `Membership`s within a `Group`.
* `CloudidentityGroupsMembershipsLookup` - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
* `CloudidentityGroupsMembershipsModifyMembershipRoles` - Modifies the `MembershipRole`s of a `Membership`.
* `CloudidentityGroupsMembershipsSearchTransitiveGroups` - Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
* `CloudidentityGroupsMembershipsSearchTransitiveMemberships` - Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.
* `CloudidentityGroupsSearch` - Searches for `Group` resources matching a specified query.
* `CloudidentityGroupsUpdateSecuritySettings` - Update Security Settings

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
