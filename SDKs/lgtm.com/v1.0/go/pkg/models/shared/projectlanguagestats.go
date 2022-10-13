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
	Alerts       *int32                          `json:"alerts"`
	AnalysisDate *time.Time                      `json:"analysis-date"`
	CommitDate   *time.Time                      `json:"commit-date"`
	CommitID     *string                         `json:"commit-id"`
	Grade        *ProjectLanguageStatsGradeEnum  `json:"grade"`
	Language     *string                         `json:"language"`
	Lines        *int32                          `json:"lines"`
	Status       *ProjectLanguageStatsStatusEnum `json:"status"`
}
