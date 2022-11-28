import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.
**/
export declare class SourcePosition extends SpeakeasyBase {
    column?: number;
    currentOffset?: number;
    endOffset?: number;
    fileName?: string;
    line?: number;
}
