import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnthosVmMembershipSpec } from "./anthosvmmembershipspec";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";


// MembershipFeatureSpec
/** 
 * MembershipFeatureSpec contains configuration information for a single Membership.
**/
export class MembershipFeatureSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=anthosvm" })
  anthosvm?: AnthosVmMembershipSpec;

  @Metadata({ data: "json, name=configmanagement" })
  configmanagement?: ConfigManagementMembershipSpec;

  @Metadata({ data: "json, name=identityservice" })
  identityservice?: IdentityServiceMembershipSpec;

  @Metadata({ data: "json, name=mesh" })
  mesh?: ServiceMeshMembershipSpec;
}
