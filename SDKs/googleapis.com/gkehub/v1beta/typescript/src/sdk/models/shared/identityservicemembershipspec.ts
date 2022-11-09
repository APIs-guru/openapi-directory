import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IdentityServiceAuthMethod } from "./identityserviceauthmethod";


// IdentityServiceMembershipSpec
/** 
 * **Anthos Identity Service**: Configuration for a single Membership.
**/
export class IdentityServiceMembershipSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=authMethods", elemType: shared.IdentityServiceAuthMethod })
  authMethods?: IdentityServiceAuthMethod[];
}
