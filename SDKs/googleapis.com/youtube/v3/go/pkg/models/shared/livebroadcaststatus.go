package shared

type LiveBroadcastStatusLifeCycleStatusEnum string

const (
	LiveBroadcastStatusLifeCycleStatusEnumLifeCycleStatusUnspecified LiveBroadcastStatusLifeCycleStatusEnum = "lifeCycleStatusUnspecified"
	LiveBroadcastStatusLifeCycleStatusEnumCreated                    LiveBroadcastStatusLifeCycleStatusEnum = "created"
	LiveBroadcastStatusLifeCycleStatusEnumReady                      LiveBroadcastStatusLifeCycleStatusEnum = "ready"
	LiveBroadcastStatusLifeCycleStatusEnumTesting                    LiveBroadcastStatusLifeCycleStatusEnum = "testing"
	LiveBroadcastStatusLifeCycleStatusEnumLive                       LiveBroadcastStatusLifeCycleStatusEnum = "live"
	LiveBroadcastStatusLifeCycleStatusEnumComplete                   LiveBroadcastStatusLifeCycleStatusEnum = "complete"
	LiveBroadcastStatusLifeCycleStatusEnumRevoked                    LiveBroadcastStatusLifeCycleStatusEnum = "revoked"
	LiveBroadcastStatusLifeCycleStatusEnumTestStarting               LiveBroadcastStatusLifeCycleStatusEnum = "testStarting"
	LiveBroadcastStatusLifeCycleStatusEnumLiveStarting               LiveBroadcastStatusLifeCycleStatusEnum = "liveStarting"
)

type LiveBroadcastStatusLiveBroadcastPriorityEnum string

const (
	LiveBroadcastStatusLiveBroadcastPriorityEnumLiveBroadcastPriorityUnspecified LiveBroadcastStatusLiveBroadcastPriorityEnum = "liveBroadcastPriorityUnspecified"
	LiveBroadcastStatusLiveBroadcastPriorityEnumLow                              LiveBroadcastStatusLiveBroadcastPriorityEnum = "low"
	LiveBroadcastStatusLiveBroadcastPriorityEnumNormal                           LiveBroadcastStatusLiveBroadcastPriorityEnum = "normal"
	LiveBroadcastStatusLiveBroadcastPriorityEnumHigh                             LiveBroadcastStatusLiveBroadcastPriorityEnum = "high"
)

type LiveBroadcastStatusPrivacyStatusEnum string

const (
	LiveBroadcastStatusPrivacyStatusEnumPublic   LiveBroadcastStatusPrivacyStatusEnum = "public"
	LiveBroadcastStatusPrivacyStatusEnumUnlisted LiveBroadcastStatusPrivacyStatusEnum = "unlisted"
	LiveBroadcastStatusPrivacyStatusEnumPrivate  LiveBroadcastStatusPrivacyStatusEnum = "private"
)

type LiveBroadcastStatusRecordingStatusEnum string

const (
	LiveBroadcastStatusRecordingStatusEnumLiveBroadcastRecordingStatusUnspecified LiveBroadcastStatusRecordingStatusEnum = "liveBroadcastRecordingStatusUnspecified"
	LiveBroadcastStatusRecordingStatusEnumNotRecording                            LiveBroadcastStatusRecordingStatusEnum = "notRecording"
	LiveBroadcastStatusRecordingStatusEnumRecording                               LiveBroadcastStatusRecordingStatusEnum = "recording"
	LiveBroadcastStatusRecordingStatusEnumRecorded                                LiveBroadcastStatusRecordingStatusEnum = "recorded"
)

type LiveBroadcastStatus struct {
	LifeCycleStatus         *LiveBroadcastStatusLifeCycleStatusEnum       `json:"lifeCycleStatus"`
	LiveBroadcastPriority   *LiveBroadcastStatusLiveBroadcastPriorityEnum `json:"liveBroadcastPriority"`
	MadeForKids             *bool                                         `json:"madeForKids"`
	PrivacyStatus           *LiveBroadcastStatusPrivacyStatusEnum         `json:"privacyStatus"`
	RecordingStatus         *LiveBroadcastStatusRecordingStatusEnum       `json:"recordingStatus"`
	SelfDeclaredMadeForKids *bool                                         `json:"selfDeclaredMadeForKids"`
}
