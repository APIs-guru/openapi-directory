import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnthosVmMembershipState } from "./anthosvmmembershipstate";
import { AppDevExperienceFeatureState } from "./appdevexperiencefeaturestate";
import { ConfigManagementMembershipState } from "./configmanagementmembershipstate";
import { IdentityServiceMembershipState } from "./identityservicemembershipstate";
import { ServiceMeshMembershipState } from "./servicemeshmembershipstate";
import { FeatureState } from "./featurestate";


// MembershipFeatureState
/** 
 * MembershipFeatureState contains Feature status information for a single Membership.
**/
export class MembershipFeatureState extends SpeakeasyBase {
  @Metadata({ data: "json, name=anthosvm" })
  anthosvm?: AnthosVmMembershipState;

  @Metadata({ data: "json, name=appdevexperience" })
  appdevexperience?: AppDevExperienceFeatureState;

  @Metadata({ data: "json, name=configmanagement" })
  configmanagement?: ConfigManagementMembershipState;

  @Metadata({ data: "json, name=identityservice" })
  identityservice?: IdentityServiceMembershipState;

  @Metadata({ data: "json, name=servicemesh" })
  servicemesh?: ServiceMeshMembershipState;

  @Metadata({ data: "json, name=state" })
  state?: FeatureState;
}
