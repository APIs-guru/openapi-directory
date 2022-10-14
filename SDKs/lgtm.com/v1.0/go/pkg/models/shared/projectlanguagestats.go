package shared

import (
	"time"
)

type ProjectLanguageStatsGradeEnum string

const (
	ProjectLanguageStatsGradeEnumAPlus ProjectLanguageStatsGradeEnum = "A+"
	ProjectLanguageStatsGradeEnumA     ProjectLanguageStatsGradeEnum = "A"
	ProjectLanguageStatsGradeEnumB     ProjectLanguageStatsGradeEnum = "B"
	ProjectLanguageStatsGradeEnumC     ProjectLanguageStatsGradeEnum = "C"
	ProjectLanguageStatsGradeEnumD     ProjectLanguageStatsGradeEnum = "D"
	ProjectLanguageStatsGradeEnumE     ProjectLanguageStatsGradeEnum = "E"
)

type ProjectLanguageStatsStatusEnum string

const (
	ProjectLanguageStatsStatusEnumSuccess ProjectLanguageStatsStatusEnum = "success"
	ProjectLanguageStatsStatusEnumFailure ProjectLanguageStatsStatusEnum = "failure"
	ProjectLanguageStatsStatusEnumPending ProjectLanguageStatsStatusEnum = "pending"
)

type ProjectLanguageStats struct {
	Alerts       *int32                          `json:"alerts,omitempty"`
	AnalysisDate *time.Time                      `json:"analysis-date,omitempty"`
	CommitDate   *time.Time                      `json:"commit-date,omitempty"`
	CommitID     *string                         `json:"commit-id,omitempty"`
	Grade        *ProjectLanguageStatsGradeEnum  `json:"grade,omitempty"`
	Language     *string                         `json:"language,omitempty"`
	Lines        *int32                          `json:"lines,omitempty"`
	Status       *ProjectLanguageStatsStatusEnum `json:"status,omitempty"`
}
