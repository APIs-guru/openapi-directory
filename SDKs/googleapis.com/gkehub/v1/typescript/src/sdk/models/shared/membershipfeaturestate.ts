import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=appdevexperience" })
  appdevexperience?: AppDevExperienceFeatureState;

  @SpeakeasyMetadata({ data: "json, name=configmanagement" })
  configmanagement?: ConfigManagementMembershipState;

  @SpeakeasyMetadata({ data: "json, name=fleetobservability" })
  fleetobservability?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=identityservice" })
  identityservice?: IdentityServiceMembershipState;

  @SpeakeasyMetadata({ data: "json, name=servicemesh" })
  servicemesh?: ServiceMeshMembershipState;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FeatureState;
}
