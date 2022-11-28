import { SpeakeasyBase } from "../../../internal/utils";
import { ConcatPosition } from "./concatposition";
/**
 * Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
**/
export declare class Position extends SpeakeasyBase {
    byteOffset?: string;
    concatPosition?: ConcatPosition;
    end?: boolean;
    key?: string;
    recordIndex?: string;
    shufflePosition?: string;
}
