import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NamedStyle } from "./namedstyle";


// NamedStyles
/** 
 * The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.
**/
export class NamedStyles extends SpeakeasyBase {
  @Metadata({ data: "json, name=styles", elemType: shared.NamedStyle })
  styles?: NamedStyle[];
}
