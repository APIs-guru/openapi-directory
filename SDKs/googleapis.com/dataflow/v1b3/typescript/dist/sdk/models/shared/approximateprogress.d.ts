import { SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
/**
 * Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.
**/
export declare class ApproximateProgress extends SpeakeasyBase {
    percentComplete?: number;
    position?: Position;
    remainingTime?: string;
}
