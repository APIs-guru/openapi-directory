import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";

export enum IdentityServiceMembershipStateStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    Ok = "OK"
,    Error = "ERROR"
}


// IdentityServiceMembershipState
/** 
 * **Anthos Identity Service**: State for a single Membership.
**/
export class IdentityServiceMembershipState extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=installedVersion" })
  installedVersion?: string;

  @Metadata({ data: "json, name=memberConfig" })
  memberConfig?: IdentityServiceMembershipSpec;

  @Metadata({ data: "json, name=state" })
  state?: IdentityServiceMembershipStateStateEnum;
}
