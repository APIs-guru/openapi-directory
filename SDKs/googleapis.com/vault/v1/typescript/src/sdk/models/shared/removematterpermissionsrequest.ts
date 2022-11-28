import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveMatterPermissionsRequest
/** 
 * Remove an account as a matter collaborator.
**/
export class RemoveMatterPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;
}
