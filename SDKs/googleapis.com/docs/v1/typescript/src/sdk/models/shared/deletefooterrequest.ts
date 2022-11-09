import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteFooterRequest
/** 
 * Deletes a Footer from the document.
**/
export class DeleteFooterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=footerId" })
  footerId?: string;
}
