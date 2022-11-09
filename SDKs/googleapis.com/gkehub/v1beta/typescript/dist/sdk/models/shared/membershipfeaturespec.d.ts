import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AnthosObservabilityMembershipSpec } from "./anthosobservabilitymembershipspec";
import { AnthosVmMembershipSpec } from "./anthosvmmembershipspec";
import { MembershipSpec } from "./membershipspec";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { PolicyControllerMembershipSpec } from "./policycontrollermembershipspec";
/**
 * MembershipFeatureSpec contains configuration information for a single Membership.
**/
export declare class MembershipFeatureSpec extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityMembershipSpec;
    anthosvm?: AnthosVmMembershipSpec;
    cloudbuild?: MembershipSpec;
    configmanagement?: ConfigManagementMembershipSpec;
    identityservice?: IdentityServiceMembershipSpec;
    mesh?: ServiceMeshMembershipSpec;
    policycontroller?: PolicyControllerMembershipSpec;
}
