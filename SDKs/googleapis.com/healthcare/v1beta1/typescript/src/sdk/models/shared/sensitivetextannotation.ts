import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Detail } from "./detail";



// SensitiveTextAnnotation
/** 
 * A TextAnnotation specifies a text range that includes sensitive information.
**/
export class SensitiveTextAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details", elemType: Detail })
  details?: Map<string, Detail>;
}
