import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnthosObservabilityMembershipSpec } from "./anthosobservabilitymembershipspec";
import { AnthosVmMembershipSpec } from "./anthosvmmembershipspec";
import { CloudBuildMembershipSpec } from "./cloudbuildmembershipspec";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { PolicyControllerMembershipSpec } from "./policycontrollermembershipspec";
import { MembershipSpec } from "./membershipspec";


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
  cloudbuild?: CloudBuildMembershipSpec;

  @Metadata({ data: "json, name=configmanagement" })
  configmanagement?: ConfigManagementMembershipSpec;

  @Metadata({ data: "json, name=identityservice" })
  identityservice?: IdentityServiceMembershipSpec;

  @Metadata({ data: "json, name=mesh" })
  mesh?: ServiceMeshMembershipSpec;

  @Metadata({ data: "json, name=policycontroller" })
  policycontroller?: PolicyControllerMembershipSpec;

  @Metadata({ data: "json, name=workloadcertificate" })
  workloadcertificate?: MembershipSpec;
}
