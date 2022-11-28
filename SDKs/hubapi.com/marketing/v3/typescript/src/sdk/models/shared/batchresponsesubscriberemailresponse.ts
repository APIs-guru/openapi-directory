import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardError } from "./standarderror";
import { SubscriberEmailResponse } from "./subscriberemailresponse";


export enum BatchResponseSubscriberEmailResponseStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}


export class BatchResponseSubscriberEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completedAt" })
  completedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: StandardError })
  errors?: StandardError[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=numErrors" })
  numErrors?: number;

  @SpeakeasyMetadata({ data: "json, name=requestedAt" })
  requestedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: SubscriberEmailResponse })
  results: SubscriberEmailResponse[];

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: BatchResponseSubscriberEmailResponseStatusEnum;
}
