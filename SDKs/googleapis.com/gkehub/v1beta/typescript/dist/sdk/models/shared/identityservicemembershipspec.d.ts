import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityServiceAuthMethod } from "./identityserviceauthmethod";
import { IdentityServiceAuthMethodInput } from "./identityserviceauthmethod";
/**
 * **Anthos Identity Service**: Configuration for a single Membership.
**/
export declare class IdentityServiceMembershipSpec extends SpeakeasyBase {
    authMethods?: IdentityServiceAuthMethod[];
}
/**
 * **Anthos Identity Service**: Configuration for a single Membership.
**/
export declare class IdentityServiceMembershipSpecInput extends SpeakeasyBase {
    authMethods?: IdentityServiceAuthMethodInput[];
}
