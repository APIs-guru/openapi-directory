import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dataset } from "./dataset";
import { Session } from "./session";

export enum AggregateBucketTypeEnum {
    Unknown = "unknown"
,    Time = "time"
,    Session = "session"
,    ActivityType = "activityType"
,    ActivitySegment = "activitySegment"
}


export class AggregateBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity" })
  activity?: number;

  @Metadata({ data: "json, name=dataset", elemType: shared.Dataset })
  dataset?: Dataset[];

  @Metadata({ data: "json, name=endTimeMillis" })
  endTimeMillis?: string;

  @Metadata({ data: "json, name=session" })
  session?: Session;

  @Metadata({ data: "json, name=startTimeMillis" })
  startTimeMillis?: string;

  @Metadata({ data: "json, name=type" })
  type?: AggregateBucketTypeEnum;
}
