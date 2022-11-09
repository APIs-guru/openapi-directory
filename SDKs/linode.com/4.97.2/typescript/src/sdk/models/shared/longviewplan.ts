import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LongviewPlanLongviewSubscriptionEnum {
    Longview3 = "longview-3"
,    Longview10 = "longview-10"
,    Longview40 = "longview-40"
,    Longview100 = "longview-100"
}


// LongviewPlan
/** 
 * Longview Plan object.
 * 
**/
export class LongviewPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=longview_subscription" })
  longviewSubscription?: LongviewPlanLongviewSubscriptionEnum;
}
