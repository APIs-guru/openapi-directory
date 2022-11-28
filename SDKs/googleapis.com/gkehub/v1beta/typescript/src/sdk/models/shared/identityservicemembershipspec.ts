import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityServiceAuthMethod } from "./identityserviceauthmethod";
import { IdentityServiceAuthMethodInput } from "./identityserviceauthmethod";



// IdentityServiceMembershipSpec
/** 
 * **Anthos Identity Service**: Configuration for a single Membership.
**/
export class IdentityServiceMembershipSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authMethods", elemType: IdentityServiceAuthMethod })
  authMethods?: IdentityServiceAuthMethod[];
}


// IdentityServiceMembershipSpecInput
/** 
 * **Anthos Identity Service**: Configuration for a single Membership.
**/
export class IdentityServiceMembershipSpecInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authMethods", elemType: IdentityServiceAuthMethodInput })
  authMethods?: IdentityServiceAuthMethodInput[];
}
