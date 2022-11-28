import { SpeakeasyBase } from "../../../internal/utils";
import { AnthosObservabilityMembershipSpec } from "./anthosobservabilitymembershipspec";
import { MembershipSpec } from "./membershipspec";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { PolicyControllerMembershipSpec } from "./policycontrollermembershipspec";
import { IdentityServiceMembershipSpecInput } from "./identityservicemembershipspec";
/**
 * MembershipFeatureSpec contains configuration information for a single Membership.
**/
export declare class MembershipFeatureSpec extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityMembershipSpec;
    cloudbuild?: MembershipSpec;
    configmanagement?: ConfigManagementMembershipSpec;
    fleetobservability?: Map<string, any>;
    identityservice?: IdentityServiceMembershipSpec;
    mesh?: ServiceMeshMembershipSpec;
    policycontroller?: PolicyControllerMembershipSpec;
}
/**
 * MembershipFeatureSpec contains configuration information for a single Membership.
**/
export declare class MembershipFeatureSpecInput extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityMembershipSpec;
    cloudbuild?: MembershipSpec;
    configmanagement?: ConfigManagementMembershipSpec;
    fleetobservability?: Map<string, any>;
    identityservice?: IdentityServiceMembershipSpecInput;
    mesh?: ServiceMeshMembershipSpec;
    policycontroller?: PolicyControllerMembershipSpec;
}
