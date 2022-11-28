import { SpeakeasyBase } from "../../../internal/utils";
import { AppDevExperienceFeatureState } from "./appdevexperiencefeaturestate";
import { ConfigManagementMembershipState } from "./configmanagementmembershipstate";
import { IdentityServiceMembershipState } from "./identityservicemembershipstate";
import { ServiceMeshMembershipState } from "./servicemeshmembershipstate";
import { FeatureState } from "./featurestate";
/**
 * MembershipFeatureState contains Feature status information for a single Membership.
**/
export declare class MembershipFeatureState extends SpeakeasyBase {
    appdevexperience?: AppDevExperienceFeatureState;
    configmanagement?: ConfigManagementMembershipState;
    fleetobservability?: Map<string, any>;
    identityservice?: IdentityServiceMembershipState;
    servicemesh?: ServiceMeshMembershipState;
    state?: FeatureState;
}
