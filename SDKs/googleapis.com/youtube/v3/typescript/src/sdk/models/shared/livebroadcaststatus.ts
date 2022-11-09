import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LiveBroadcastStatusLifeCycleStatusEnum {
    LifeCycleStatusUnspecified = "lifeCycleStatusUnspecified"
,    Created = "created"
,    Ready = "ready"
,    Testing = "testing"
,    Live = "live"
,    Complete = "complete"
,    Revoked = "revoked"
,    TestStarting = "testStarting"
,    LiveStarting = "liveStarting"
}

export enum LiveBroadcastStatusLiveBroadcastPriorityEnum {
    LiveBroadcastPriorityUnspecified = "liveBroadcastPriorityUnspecified"
,    Low = "low"
,    Normal = "normal"
,    High = "high"
}

export enum LiveBroadcastStatusPrivacyStatusEnum {
    Public = "public"
,    Unlisted = "unlisted"
,    Private = "private"
}

export enum LiveBroadcastStatusRecordingStatusEnum {
    LiveBroadcastRecordingStatusUnspecified = "liveBroadcastRecordingStatusUnspecified"
,    NotRecording = "notRecording"
,    Recording = "recording"
,    Recorded = "recorded"
}


// LiveBroadcastStatus
/** 
 * Live broadcast state.
**/
export class LiveBroadcastStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifeCycleStatus" })
  lifeCycleStatus?: LiveBroadcastStatusLifeCycleStatusEnum;

  @Metadata({ data: "json, name=liveBroadcastPriority" })
  liveBroadcastPriority?: LiveBroadcastStatusLiveBroadcastPriorityEnum;

  @Metadata({ data: "json, name=madeForKids" })
  madeForKids?: boolean;

  @Metadata({ data: "json, name=privacyStatus" })
  privacyStatus?: LiveBroadcastStatusPrivacyStatusEnum;

  @Metadata({ data: "json, name=recordingStatus" })
  recordingStatus?: LiveBroadcastStatusRecordingStatusEnum;

  @Metadata({ data: "json, name=selfDeclaredMadeForKids" })
  selfDeclaredMadeForKids?: boolean;
}
