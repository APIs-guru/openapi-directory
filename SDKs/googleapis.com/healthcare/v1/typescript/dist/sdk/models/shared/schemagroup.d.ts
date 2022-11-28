import { SpeakeasyBase } from "../../../internal/utils";
import { GroupOrSegment } from "./grouporsegment";
/**
 * An HL7v2 logical group construct.
**/
export declare class SchemaGroup extends SpeakeasyBase {
    choice?: boolean;
    maxOccurs?: number;
    members?: GroupOrSegment[];
    minOccurs?: number;
    name?: string;
}
