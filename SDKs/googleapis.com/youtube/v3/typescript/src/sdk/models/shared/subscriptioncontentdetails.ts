import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SubscriptionContentDetailsActivityTypeEnum {
    SubscriptionActivityTypeUnspecified = "subscriptionActivityTypeUnspecified"
,    All = "all"
,    Uploads = "uploads"
}


// SubscriptionContentDetails
/** 
 * Details about the content to witch a subscription refers.
**/
export class SubscriptionContentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityType" })
  activityType?: SubscriptionContentDetailsActivityTypeEnum;

  @Metadata({ data: "json, name=newItemCount" })
  newItemCount?: number;

  @Metadata({ data: "json, name=totalItemCount" })
  totalItemCount?: number;
}
