import { SpeakeasyBase } from "../../../internal/utils";
import { Dataset } from "./dataset";
import { Session } from "./session";
export declare enum AggregateBucketTypeEnum {
    Unknown = "unknown",
    Time = "time",
    Session = "session",
    ActivityType = "activityType",
    ActivitySegment = "activitySegment"
}
export declare class AggregateBucket extends SpeakeasyBase {
    activity?: number;
    dataset?: Dataset[];
    endTimeMillis?: string;
    session?: Session;
    startTimeMillis?: string;
    type?: AggregateBucketTypeEnum;
}
