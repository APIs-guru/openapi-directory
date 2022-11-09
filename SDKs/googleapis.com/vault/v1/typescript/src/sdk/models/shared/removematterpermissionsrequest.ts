import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveMatterPermissionsRequest
/** 
 * Remove an account as a matter collaborator.
**/
export class RemoveMatterPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;
}
