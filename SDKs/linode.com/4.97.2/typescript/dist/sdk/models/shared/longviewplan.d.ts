import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LongviewPlanLongviewSubscriptionEnum {
    Longview3 = "longview-3",
    Longview10 = "longview-10",
    Longview40 = "longview-40",
    Longview100 = "longview-100"
}
/**
 * Longview Plan object.
 *
**/
export declare class LongviewPlan extends SpeakeasyBase {
    longviewSubscription?: LongviewPlanLongviewSubscriptionEnum;
}
