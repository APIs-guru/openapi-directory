import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AnthosVmMembershipState } from "./anthosvmmembershipstate";
import { AppDevExperienceFeatureState } from "./appdevexperiencefeaturestate";
import { ConfigManagementMembershipState } from "./configmanagementmembershipstate";
import { IdentityServiceMembershipState } from "./identityservicemembershipstate";
import { MeteringMembershipState } from "./meteringmembershipstate";
import { PolicyControllerMembershipState } from "./policycontrollermembershipstate";
import { ServiceMeshMembershipState } from "./servicemeshmembershipstate";
import { FeatureState } from "./featurestate";
/**
 * MembershipFeatureState contains Feature status information for a single Membership.
**/
export declare class MembershipFeatureState extends SpeakeasyBase {
    anthosvm?: AnthosVmMembershipState;
    appdevexperience?: AppDevExperienceFeatureState;
    configmanagement?: ConfigManagementMembershipState;
    identityservice?: IdentityServiceMembershipState;
    metering?: MeteringMembershipState;
    policycontroller?: PolicyControllerMembershipState;
    servicemesh?: ServiceMeshMembershipState;
    state?: FeatureState;
}
