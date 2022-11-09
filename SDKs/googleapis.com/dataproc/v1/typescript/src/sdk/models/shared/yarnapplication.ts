import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum YarnApplicationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    New = "NEW"
,    NewSaving = "NEW_SAVING"
,    Submitted = "SUBMITTED"
,    Accepted = "ACCEPTED"
,    Running = "RUNNING"
,    Finished = "FINISHED"
,    Failed = "FAILED"
,    Killed = "KILLED"
}


// YarnApplication
/** 
 * A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
**/
export class YarnApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=progress" })
  progress?: number;

  @Metadata({ data: "json, name=state" })
  state?: YarnApplicationStateEnum;

  @Metadata({ data: "json, name=trackingUrl" })
  trackingUrl?: string;
}
