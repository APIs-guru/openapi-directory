import { SpeakeasyBase } from "../../../internal/utils";
import { AnthosObservabilityMembershipSpec } from "./anthosobservabilitymembershipspec";
import { CloudBuildMembershipSpec } from "./cloudbuildmembershipspec";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpecInput } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { PolicyControllerMembershipSpec } from "./policycontrollermembershipspec";
import { MembershipSpec } from "./membershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
/**
 * MembershipFeatureSpec contains configuration information for a single Membership.
**/
export declare class MembershipFeatureSpecInput extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityMembershipSpec;
    cloudbuild?: CloudBuildMembershipSpec;
    configmanagement?: ConfigManagementMembershipSpec;
    fleetobservability?: Map<string, any>;
    identityservice?: IdentityServiceMembershipSpecInput;
    mesh?: ServiceMeshMembershipSpec;
    policycontroller?: PolicyControllerMembershipSpec;
    workloadcertificate?: MembershipSpec;
}
/**
 * MembershipFeatureSpec contains configuration information for a single Membership.
**/
export declare class MembershipFeatureSpec extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityMembershipSpec;
    cloudbuild?: CloudBuildMembershipSpec;
    configmanagement?: ConfigManagementMembershipSpec;
    fleetobservability?: Map<string, any>;
    identityservice?: IdentityServiceMembershipSpec;
    mesh?: ServiceMeshMembershipSpec;
    policycontroller?: PolicyControllerMembershipSpec;
    workloadcertificate?: MembershipSpec;
}
