import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpecInput } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";



// MembershipFeatureSpecInput
/** 
 * MembershipFeatureSpec contains configuration information for a single Membership.
**/
export class MembershipFeatureSpecInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configmanagement" })
  configmanagement?: ConfigManagementMembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=fleetobservability" })
  fleetobservability?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=identityservice" })
  identityservice?: IdentityServiceMembershipSpecInput;

  @SpeakeasyMetadata({ data: "json, name=mesh" })
  mesh?: ServiceMeshMembershipSpec;
}


// MembershipFeatureSpec
/** 
 * MembershipFeatureSpec contains configuration information for a single Membership.
**/
export class MembershipFeatureSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configmanagement" })
  configmanagement?: ConfigManagementMembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=fleetobservability" })
  fleetobservability?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=identityservice" })
  identityservice?: IdentityServiceMembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=mesh" })
  mesh?: ServiceMeshMembershipSpec;
}
