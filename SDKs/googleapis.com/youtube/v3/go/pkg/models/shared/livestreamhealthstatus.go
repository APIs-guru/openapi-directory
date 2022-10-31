package shared




type LiveStreamHealthStatusStatusEnum string

const (
    LiveStreamHealthStatusStatusEnumGood LiveStreamHealthStatusStatusEnum = "good"
LiveStreamHealthStatusStatusEnumOk LiveStreamHealthStatusStatusEnum = "ok"
LiveStreamHealthStatusStatusEnumBad LiveStreamHealthStatusStatusEnum = "bad"
LiveStreamHealthStatusStatusEnumNoData LiveStreamHealthStatusStatusEnum = "noData"
LiveStreamHealthStatusStatusEnumRevoked LiveStreamHealthStatusStatusEnum = "revoked"
)


type LiveStreamHealthStatus struct {
    ConfigurationIssues []LiveStreamConfigurationIssue `json:"configurationIssues,omitempty"`
    LastUpdateTimeSeconds *string `json:"lastUpdateTimeSeconds,omitempty"`
    Status *LiveStreamHealthStatusStatusEnum `json:"status,omitempty"`
    
}

