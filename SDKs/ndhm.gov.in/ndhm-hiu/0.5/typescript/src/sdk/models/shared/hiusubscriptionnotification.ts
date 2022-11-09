import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscriptionCategoryEnum } from "./subscriptioncategoryenum";
import { HiuSubscriptionEventContent } from "./hiusubscriptioneventcontent";


export class HiuSubscriptionNotificationEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: SubscriptionCategoryEnum;

  @Metadata({ data: "json, name=content" })
  content: HiuSubscriptionEventContent;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=published" })
  published: Date;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId: string;
}


export class HiuSubscriptionNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=event" })
  event: HiuSubscriptionNotificationEvent;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
