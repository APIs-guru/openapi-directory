import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentStyle } from "./documentstyle";


// UpdateDocumentStyleRequest
/** 
 * Updates the DocumentStyle.
**/
export class UpdateDocumentStyleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentStyle" })
  documentStyle?: DocumentStyle;

  @Metadata({ data: "json, name=fields" })
  fields?: string;
}
