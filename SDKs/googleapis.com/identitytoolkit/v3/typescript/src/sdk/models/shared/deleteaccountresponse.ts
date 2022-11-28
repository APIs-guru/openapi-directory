import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteAccountResponse
/** 
 * Respone of deleting account.
**/
export class DeleteAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
