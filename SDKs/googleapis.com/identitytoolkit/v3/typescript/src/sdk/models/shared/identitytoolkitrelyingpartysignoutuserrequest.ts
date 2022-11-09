import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartySignOutUserRequest
/** 
 * Request to sign out user.
**/
export class IdentitytoolkitRelyingpartySignOutUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=localId" })
  localId?: string;
}
