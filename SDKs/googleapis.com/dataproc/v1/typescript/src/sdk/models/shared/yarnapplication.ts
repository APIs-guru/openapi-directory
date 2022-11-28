import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum YarnApplicationStateEnum {
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


// YarnApplication
/** 
 * A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
**/
export class YarnApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: YarnApplicationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trackingUrl" })
  trackingUrl?: string;
}
