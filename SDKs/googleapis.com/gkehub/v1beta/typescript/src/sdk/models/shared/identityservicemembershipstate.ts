import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";


export enum IdentityServiceMembershipStateStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    Ok = "OK",
    Error = "ERROR"
}


// IdentityServiceMembershipState
/** 
 * **Anthos Identity Service**: State for a single Membership.
**/
export class IdentityServiceMembershipState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=installedVersion" })
  installedVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=memberConfig" })
  memberConfig?: IdentityServiceMembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: IdentityServiceMembershipStateStateEnum;
}
