import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LiveBroadcastStatusLifeCycleStatusEnum {
    LifeCycleStatusUnspecified = "lifeCycleStatusUnspecified",
    Created = "created",
    Ready = "ready",
    Testing = "testing",
    Live = "live",
    Complete = "complete",
    Revoked = "revoked",
    TestStarting = "testStarting",
    LiveStarting = "liveStarting"
}

export enum LiveBroadcastStatusLiveBroadcastPriorityEnum {
    LiveBroadcastPriorityUnspecified = "liveBroadcastPriorityUnspecified",
    Low = "low",
    Normal = "normal",
    High = "high"
}

export enum LiveBroadcastStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}

export enum LiveBroadcastStatusRecordingStatusEnum {
    LiveBroadcastRecordingStatusUnspecified = "liveBroadcastRecordingStatusUnspecified",
    NotRecording = "notRecording",
    Recording = "recording",
    Recorded = "recorded"
}


// LiveBroadcastStatus
/** 
 * Live broadcast state.
**/
export class LiveBroadcastStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lifeCycleStatus" })
  lifeCycleStatus?: LiveBroadcastStatusLifeCycleStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=liveBroadcastPriority" })
  liveBroadcastPriority?: LiveBroadcastStatusLiveBroadcastPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=madeForKids" })
  madeForKids?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privacyStatus" })
  privacyStatus?: LiveBroadcastStatusPrivacyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=recordingStatus" })
  recordingStatus?: LiveBroadcastStatusRecordingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=selfDeclaredMadeForKids" })
  selfDeclaredMadeForKids?: boolean;
}
