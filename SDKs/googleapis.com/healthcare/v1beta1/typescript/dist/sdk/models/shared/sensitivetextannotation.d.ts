import { SpeakeasyBase } from "../../../internal/utils";
import { Detail } from "./detail";
/**
 * A TextAnnotation specifies a text range that includes sensitive information.
**/
export declare class SensitiveTextAnnotation extends SpeakeasyBase {
    details?: Map<string, Detail>;
}
