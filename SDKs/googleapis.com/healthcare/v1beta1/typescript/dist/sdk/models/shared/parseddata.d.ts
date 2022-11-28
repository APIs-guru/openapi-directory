import { SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";
/**
 * The content of an HL7v2 message in a structured format.
**/
export declare class ParsedData extends SpeakeasyBase {
    segments?: Segment[];
}
