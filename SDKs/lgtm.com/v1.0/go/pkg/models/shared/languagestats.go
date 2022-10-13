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
	Alerts       *int32                   `json:"alerts"`
	AnalysisDate *time.Time               `json:"analysis-date"`
	CommitDate   *time.Time               `json:"commit-date"`
	CommitID     *string                  `json:"commit-id"`
	Language     *string                  `json:"language"`
	Lines        *int32                   `json:"lines"`
	Status       *LanguageStatsStatusEnum `json:"status"`
}
