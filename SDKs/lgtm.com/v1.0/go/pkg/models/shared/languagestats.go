package shared

import (
	"time"
)

type LanguageStatsStatusEnum string

const (
	LanguageStatsStatusEnumSuccess LanguageStatsStatusEnum = "success"
	LanguageStatsStatusEnumFailure LanguageStatsStatusEnum = "failure"
	LanguageStatsStatusEnumPending LanguageStatsStatusEnum = "pending"
)

type LanguageStats struct {
	Alerts       *int32                   `json:"alerts,omitempty"`
	AnalysisDate *time.Time               `json:"analysis-date,omitempty"`
	CommitDate   *time.Time               `json:"commit-date,omitempty"`
	CommitID     *string                  `json:"commit-id,omitempty"`
	Language     *string                  `json:"language,omitempty"`
	Lines        *int32                   `json:"lines,omitempty"`
	Status       *LanguageStatsStatusEnum `json:"status,omitempty"`
}
