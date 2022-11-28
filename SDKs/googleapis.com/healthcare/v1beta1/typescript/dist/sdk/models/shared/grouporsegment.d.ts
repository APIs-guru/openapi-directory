import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaGroup } from "./schemagroup";
import { SchemaSegment } from "./schemasegment";
/**
 * Construct representing a logical group or a segment.
**/
export declare class GroupOrSegment extends SpeakeasyBase {
    group?: SchemaGroup;
    segment?: SchemaSegment;
}
