import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionResponse } from "./subscriptionresponse";


export enum BatchResponseSubscriptionResponseStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}


export class BatchResponseSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completedAt" })
  completedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=requestedAt" })
  requestedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: SubscriptionResponse })
  results: SubscriptionResponse[];

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: BatchResponseSubscriptionResponseStatusEnum;
}
