import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Estimated fractional progress for each step, from `0` to `1`.
**/
export declare class Progress extends SpeakeasyBase {
    analyzed?: number;
    encoded?: number;
    notified?: number;
    uploaded?: number;
}
