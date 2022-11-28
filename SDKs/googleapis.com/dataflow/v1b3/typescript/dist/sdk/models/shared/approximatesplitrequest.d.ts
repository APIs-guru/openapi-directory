import { SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
/**
 * A suggestion by the service to the worker to dynamically split the WorkItem.
**/
export declare class ApproximateSplitRequest extends SpeakeasyBase {
    fractionConsumed?: number;
    fractionOfRemainder?: number;
    position?: Position;
}
