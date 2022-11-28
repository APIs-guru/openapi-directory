import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteHeaderRequest
/** 
 * Deletes a Header from the document.
**/
export class DeleteHeaderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headerId" })
  headerId?: string;
}
