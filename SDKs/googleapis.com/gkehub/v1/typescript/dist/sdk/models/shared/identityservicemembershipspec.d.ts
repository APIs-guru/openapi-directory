import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityServiceAuthMethodInput } from "./identityserviceauthmethod";
import { IdentityServiceAuthMethod } from "./identityserviceauthmethod";
/**
 * **Anthos Identity Service**: Configuration for a single Membership.
**/
export declare class IdentityServiceMembershipSpecInput extends SpeakeasyBase {
    authMethods?: IdentityServiceAuthMethodInput[];
}
/**
 * **Anthos Identity Service**: Configuration for a single Membership.
**/
export declare class IdentityServiceMembershipSpec extends SpeakeasyBase {
    authMethods?: IdentityServiceAuthMethod[];
}
