import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dataset } from "./dataset";
import { Session } from "./session";


export enum AggregateBucketTypeEnum {
    Unknown = "unknown",
    Time = "time",
    Session = "session",
    ActivityType = "activityType",
    ActivitySegment = "activitySegment"
}


export class AggregateBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity" })
  activity?: number;

  @SpeakeasyMetadata({ data: "json, name=dataset", elemType: Dataset })
  dataset?: Dataset[];

  @SpeakeasyMetadata({ data: "json, name=endTimeMillis" })
  endTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: Session;

  @SpeakeasyMetadata({ data: "json, name=startTimeMillis" })
  startTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AggregateBucketTypeEnum;
}
