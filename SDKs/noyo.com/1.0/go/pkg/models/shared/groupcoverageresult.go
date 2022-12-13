package shared

import (
	"time"
)

type GroupCoverageResultLineOfCoverageEnum string

const (
	GroupCoverageResultLineOfCoverageEnumAccident          GroupCoverageResultLineOfCoverageEnum = "accident"
	GroupCoverageResultLineOfCoverageEnumAdd               GroupCoverageResultLineOfCoverageEnum = "add"
	GroupCoverageResultLineOfCoverageEnumCancer            GroupCoverageResultLineOfCoverageEnum = "cancer"
	GroupCoverageResultLineOfCoverageEnumCriticalIllness   GroupCoverageResultLineOfCoverageEnum = "critical_illness"
	GroupCoverageResultLineOfCoverageEnumDental            GroupCoverageResultLineOfCoverageEnum = "dental"
	GroupCoverageResultLineOfCoverageEnumHospitalIndemnity GroupCoverageResultLineOfCoverageEnum = "hospital_indemnity"
	GroupCoverageResultLineOfCoverageEnumLife              GroupCoverageResultLineOfCoverageEnum = "life"
	GroupCoverageResultLineOfCoverageEnumLtd               GroupCoverageResultLineOfCoverageEnum = "ltd"
	GroupCoverageResultLineOfCoverageEnumMedical           GroupCoverageResultLineOfCoverageEnum = "medical"
	GroupCoverageResultLineOfCoverageEnumStd               GroupCoverageResultLineOfCoverageEnum = "std"
	GroupCoverageResultLineOfCoverageEnumVision            GroupCoverageResultLineOfCoverageEnum = "vision"
)

type GroupCoverageResult struct {
	ApplicationID          string                                `json:"application_id"`
	Created                int64                                 `json:"created"`
	ExistingCoverage       *bool                                 `json:"existing_coverage,omitempty"`
	ID                     string                                `json:"id"`
	LineOfCoverage         GroupCoverageResultLineOfCoverageEnum `json:"line_of_coverage"`
	Modified               int64                                 `json:"modified"`
	Notes                  *string                               `json:"notes,omitempty"`
	RequestedEffectiveDate time.Time                             `json:"requested_effective_date"`
	Version                string                                `json:"version"`
}
