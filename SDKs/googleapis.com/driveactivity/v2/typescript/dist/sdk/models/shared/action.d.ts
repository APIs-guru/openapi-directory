import { SpeakeasyBase } from "../../../internal/utils";
import { Actor } from "./actor";
import { ActionDetail } from "./actiondetail";
import { Target } from "./target";
import { TimeRange } from "./timerange";
/**
 * Information about the action.
**/
export declare class Action extends SpeakeasyBase {
    actor?: Actor;
    detail?: ActionDetail;
    target?: Target;
    timeRange?: TimeRange;
    timestamp?: string;
}
