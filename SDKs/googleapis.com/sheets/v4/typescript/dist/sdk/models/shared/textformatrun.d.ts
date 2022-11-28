import { SpeakeasyBase } from "../../../internal/utils";
import { TextFormat } from "./textformat";
/**
 * A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.
**/
export declare class TextFormatRun extends SpeakeasyBase {
    format?: TextFormat;
    startIndex?: number;
}
