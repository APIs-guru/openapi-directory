import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionCategoryEnum } from "./subscriptioncategoryenum";
import { HiuSubscriptionEventContent } from "./hiusubscriptioneventcontent";



export class HiuSubscriptionNotificationEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: SubscriptionCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content: HiuSubscriptionEventContent;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId: string;
}


export class HiuSubscriptionNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event: HiuSubscriptionNotificationEvent;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
