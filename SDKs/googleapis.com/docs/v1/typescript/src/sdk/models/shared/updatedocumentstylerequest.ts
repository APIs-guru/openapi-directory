import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentStyle } from "./documentstyle";



// UpdateDocumentStyleRequest
/** 
 * Updates the DocumentStyle.
**/
export class UpdateDocumentStyleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentStyle" })
  documentStyle?: DocumentStyle;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;
}
