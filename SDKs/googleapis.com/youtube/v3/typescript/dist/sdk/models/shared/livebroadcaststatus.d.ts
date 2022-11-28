import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LiveBroadcastStatusLifeCycleStatusEnum {
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
export declare enum LiveBroadcastStatusLiveBroadcastPriorityEnum {
    LiveBroadcastPriorityUnspecified = "liveBroadcastPriorityUnspecified",
    Low = "low",
    Normal = "normal",
    High = "high"
}
export declare enum LiveBroadcastStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}
export declare enum LiveBroadcastStatusRecordingStatusEnum {
    LiveBroadcastRecordingStatusUnspecified = "liveBroadcastRecordingStatusUnspecified",
    NotRecording = "notRecording",
    Recording = "recording",
    Recorded = "recorded"
}
/**
 * Live broadcast state.
**/
export declare class LiveBroadcastStatus extends SpeakeasyBase {
    lifeCycleStatus?: LiveBroadcastStatusLifeCycleStatusEnum;
    liveBroadcastPriority?: LiveBroadcastStatusLiveBroadcastPriorityEnum;
    madeForKids?: boolean;
    privacyStatus?: LiveBroadcastStatusPrivacyStatusEnum;
    recordingStatus?: LiveBroadcastStatusRecordingStatusEnum;
    selfDeclaredMadeForKids?: boolean;
}
