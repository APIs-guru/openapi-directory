import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityServiceAuthMethod } from "./identityserviceauthmethod";
/**
 * **Anthos Identity Service**: Configuration for a single Membership.
**/
export declare class IdentityServiceMembershipSpec extends SpeakeasyBase {
    authMethods?: IdentityServiceAuthMethod[];
}
