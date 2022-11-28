import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamedStyle } from "./namedstyle";



// NamedStyles
/** 
 * The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.
**/
export class NamedStyles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=styles", elemType: NamedStyle })
  styles?: NamedStyle[];
}
