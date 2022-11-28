import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartySignOutUserRequest
/** 
 * Request to sign out user.
**/
export class IdentitytoolkitRelyingpartySignOutUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=localId" })
  localId?: string;
}
