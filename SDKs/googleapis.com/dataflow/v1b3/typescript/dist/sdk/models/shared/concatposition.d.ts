import { SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
/**
 * A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources.
**/
export declare class ConcatPosition extends SpeakeasyBase {
    index?: number;
    position?: Position;
}
