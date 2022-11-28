import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
export declare enum IdentityServiceMembershipStateStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    Ok = "OK",
    Error = "ERROR"
}
/**
 * **Anthos Identity Service**: State for a single Membership.
**/
export declare class IdentityServiceMembershipState extends SpeakeasyBase {
    failureReason?: string;
    installedVersion?: string;
    memberConfig?: IdentityServiceMembershipSpec;
    state?: IdentityServiceMembershipStateStateEnum;
}
