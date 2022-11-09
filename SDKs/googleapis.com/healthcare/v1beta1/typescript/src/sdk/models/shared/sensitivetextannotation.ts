import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Detail } from "./detail";


// SensitiveTextAnnotation
/** 
 * A TextAnnotation specifies a text range that includes sensitive information.
**/
export class SensitiveTextAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=details", elemType: shared.Detail })
  details?: Map<string, Detail>;
}
