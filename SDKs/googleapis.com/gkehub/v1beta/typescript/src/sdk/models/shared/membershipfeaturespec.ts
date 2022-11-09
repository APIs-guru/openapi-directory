import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnthosObservabilityMembershipSpec } from "./anthosobservabilitymembershipspec";
import { AnthosVmMembershipSpec } from "./anthosvmmembershipspec";
import { MembershipSpec } from "./membershipspec";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { PolicyControllerMembershipSpec } from "./policycontrollermembershipspec";


// MembershipFeatureSpec
/** 
 * MembershipFeatureSpec contains configuration information for a single Membership.
**/
export class MembershipFeatureSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=anthosobservability" })
  anthosobservability?: AnthosObservabilityMembershipSpec;

  @Metadata({ data: "json, name=anthosvm" })
  anthosvm?: AnthosVmMembershipSpec;

  @Metadata({ data: "json, name=cloudbuild" })
  cloudbuild?: MembershipSpec;

  @Metadata({ data: "json, name=configmanagement" })
  configmanagement?: ConfigManagementMembershipSpec;

  @Metadata({ data: "json, name=identityservice" })
  identityservice?: IdentityServiceMembershipSpec;

  @Metadata({ data: "json, name=mesh" })
  mesh?: ServiceMeshMembershipSpec;

  @Metadata({ data: "json, name=policycontroller" })
  policycontroller?: PolicyControllerMembershipSpec;
}
