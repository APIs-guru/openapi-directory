import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteFooterRequest
/** 
 * Deletes a Footer from the document.
**/
export class DeleteFooterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=footerId" })
  footerId?: string;
}
