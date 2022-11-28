import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpecInput } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
/**
 * MembershipFeatureSpec contains configuration information for a single Membership.
**/
export declare class MembershipFeatureSpecInput extends SpeakeasyBase {
    configmanagement?: ConfigManagementMembershipSpec;
    fleetobservability?: Map<string, any>;
    identityservice?: IdentityServiceMembershipSpecInput;
    mesh?: ServiceMeshMembershipSpec;
}
/**
 * MembershipFeatureSpec contains configuration information for a single Membership.
**/
export declare class MembershipFeatureSpec extends SpeakeasyBase {
    configmanagement?: ConfigManagementMembershipSpec;
    fleetobservability?: Map<string, any>;
    identityservice?: IdentityServiceMembershipSpec;
    mesh?: ServiceMeshMembershipSpec;
}
