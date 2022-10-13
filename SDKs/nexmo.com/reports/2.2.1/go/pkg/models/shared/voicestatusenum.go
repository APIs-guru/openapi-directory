package shared

type VoiceStatusEnum string

const (
	VoiceStatusEnumStarted   VoiceStatusEnum = "started"
	VoiceStatusEnumRinging   VoiceStatusEnum = "ringing"
	VoiceStatusEnumAnswered  VoiceStatusEnum = "answered"
	VoiceStatusEnumMachine   VoiceStatusEnum = "machine"
	VoiceStatusEnumCompleted VoiceStatusEnum = "completed"
	VoiceStatusEnumTimeout   VoiceStatusEnum = "timeout"
	VoiceStatusEnumFailed    VoiceStatusEnum = "failed"
	VoiceStatusEnumRejected  VoiceStatusEnum = "rejected"
	VoiceStatusEnumCancelled VoiceStatusEnum = "cancelled"
	VoiceStatusEnumBusy      VoiceStatusEnum = "busy"
)
