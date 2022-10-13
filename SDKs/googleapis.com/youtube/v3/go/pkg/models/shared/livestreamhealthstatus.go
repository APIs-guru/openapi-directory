package shared

type LiveStreamHealthStatusStatusEnum string

const (
	LiveStreamHealthStatusStatusEnumGood    LiveStreamHealthStatusStatusEnum = "good"
	LiveStreamHealthStatusStatusEnumOk      LiveStreamHealthStatusStatusEnum = "ok"
	LiveStreamHealthStatusStatusEnumBad     LiveStreamHealthStatusStatusEnum = "bad"
	LiveStreamHealthStatusStatusEnumNoData  LiveStreamHealthStatusStatusEnum = "noData"
	LiveStreamHealthStatusStatusEnumRevoked LiveStreamHealthStatusStatusEnum = "revoked"
)

type LiveStreamHealthStatus struct {
	ConfigurationIssues   []LiveStreamConfigurationIssue    `json:"configurationIssues"`
	LastUpdateTimeSeconds *string                           `json:"lastUpdateTimeSeconds"`
	Status                *LiveStreamHealthStatusStatusEnum `json:"status"`
}
