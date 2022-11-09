import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteHeaderRequest
/** 
 * Deletes a Header from the document.
**/
export class DeleteHeaderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=headerId" })
  headerId?: string;
}
