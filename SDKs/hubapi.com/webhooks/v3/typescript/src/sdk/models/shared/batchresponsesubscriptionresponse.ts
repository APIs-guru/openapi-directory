import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscriptionResponse } from "./subscriptionresponse";

export enum BatchResponseSubscriptionResponseStatusEnum {
    Pending = "PENDING"
,    Processing = "PROCESSING"
,    Canceled = "CANCELED"
,    Complete = "COMPLETE"
}


export class BatchResponseSubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=completedAt" })
  completedAt: Date;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, string>;

  @Metadata({ data: "json, name=requestedAt" })
  requestedAt?: Date;

  @Metadata({ data: "json, name=results", elemType: shared.SubscriptionResponse })
  results: SubscriptionResponse[];

  @Metadata({ data: "json, name=startedAt" })
  startedAt: Date;

  @Metadata({ data: "json, name=status" })
  status: BatchResponseSubscriptionResponseStatusEnum;
}
