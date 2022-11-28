import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudidentityGroupsCreate - Creates a Group.
    **/
    cloudidentityGroupsCreate(req: operations.CloudidentityGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsCreateResponse>;
    /**
     * cloudidentityGroupsList - Lists the `Group` resources under a customer or namespace.
    **/
    cloudidentityGroupsList(req: operations.CloudidentityGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsListResponse>;
    /**
     * cloudidentityGroupsLookup - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
    **/
    cloudidentityGroupsLookup(req: operations.CloudidentityGroupsLookupRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsLookupResponse>;
    /**
     * cloudidentityGroupsMembershipsCheckTransitiveMembership - Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.
    **/
    cloudidentityGroupsMembershipsCheckTransitiveMembership(req: operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse>;
    /**
     * cloudidentityGroupsMembershipsCreate - Creates a `Membership`.
    **/
    cloudidentityGroupsMembershipsCreate(req: operations.CloudidentityGroupsMembershipsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsCreateResponse>;
    /**
     * cloudidentityGroupsMembershipsDelete - Deletes a `Membership`.
    **/
    cloudidentityGroupsMembershipsDelete(req: operations.CloudidentityGroupsMembershipsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsDeleteResponse>;
    /**
     * cloudidentityGroupsMembershipsGet - Retrieves a `Membership`.
    **/
    cloudidentityGroupsMembershipsGet(req: operations.CloudidentityGroupsMembershipsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsGetResponse>;
    /**
     * cloudidentityGroupsMembershipsGetMembershipGraph - Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.
    **/
    cloudidentityGroupsMembershipsGetMembershipGraph(req: operations.CloudidentityGroupsMembershipsGetMembershipGraphRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsGetMembershipGraphResponse>;
    /**
     * cloudidentityGroupsMembershipsList - Lists the `Membership`s within a `Group`.
    **/
    cloudidentityGroupsMembershipsList(req: operations.CloudidentityGroupsMembershipsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsListResponse>;
    /**
     * cloudidentityGroupsMembershipsLookup - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
    **/
    cloudidentityGroupsMembershipsLookup(req: operations.CloudidentityGroupsMembershipsLookupRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsLookupResponse>;
    /**
     * cloudidentityGroupsMembershipsModifyMembershipRoles - Modifies the `MembershipRole`s of a `Membership`.
    **/
    cloudidentityGroupsMembershipsModifyMembershipRoles(req: operations.CloudidentityGroupsMembershipsModifyMembershipRolesRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsModifyMembershipRolesResponse>;
    /**
     * cloudidentityGroupsMembershipsSearchTransitiveGroups - Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
    **/
    cloudidentityGroupsMembershipsSearchTransitiveGroups(req: operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse>;
    /**
     * cloudidentityGroupsMembershipsSearchTransitiveMemberships - Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.
    **/
    cloudidentityGroupsMembershipsSearchTransitiveMemberships(req: operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse>;
    /**
     * cloudidentityGroupsSearch - Searches for `Group` resources matching a specified query.
    **/
    cloudidentityGroupsSearch(req: operations.CloudidentityGroupsSearchRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsSearchResponse>;
    /**
     * cloudidentityGroupsUpdateSecuritySettings - Update Security Settings
    **/
    cloudidentityGroupsUpdateSecuritySettings(req: operations.CloudidentityGroupsUpdateSecuritySettingsRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsUpdateSecuritySettingsResponse>;
}
