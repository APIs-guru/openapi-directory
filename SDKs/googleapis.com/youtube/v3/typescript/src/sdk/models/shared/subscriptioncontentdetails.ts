import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubscriptionContentDetailsActivityTypeEnum {
    SubscriptionActivityTypeUnspecified = "subscriptionActivityTypeUnspecified",
    All = "all",
    Uploads = "uploads"
}


// SubscriptionContentDetails
/** 
 * Details about the content to witch a subscription refers.
**/
export class SubscriptionContentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityType" })
  activityType?: SubscriptionContentDetailsActivityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=newItemCount" })
  newItemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalItemCount" })
  totalItemCount?: number;
}
