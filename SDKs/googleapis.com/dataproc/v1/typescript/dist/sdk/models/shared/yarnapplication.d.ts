import { SpeakeasyBase } from "../../../internal/utils";
export declare enum YarnApplicationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    New = "NEW",
    NewSaving = "NEW_SAVING",
    Submitted = "SUBMITTED",
    Accepted = "ACCEPTED",
    Running = "RUNNING",
    Finished = "FINISHED",
    Failed = "FAILED",
    Killed = "KILLED"
}
/**
 * A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
**/
export declare class YarnApplication extends SpeakeasyBase {
    name?: string;
    progress?: number;
    state?: YarnApplicationStateEnum;
    trackingUrl?: string;
}
