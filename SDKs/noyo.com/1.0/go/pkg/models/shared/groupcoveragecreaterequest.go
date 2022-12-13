package shared

import (
	"time"
)

type GroupCoverageCreateRequestLineOfCoverageEnum string

const (
	GroupCoverageCreateRequestLineOfCoverageEnumAccident          GroupCoverageCreateRequestLineOfCoverageEnum = "accident"
	GroupCoverageCreateRequestLineOfCoverageEnumAdd               GroupCoverageCreateRequestLineOfCoverageEnum = "add"
	GroupCoverageCreateRequestLineOfCoverageEnumCancer            GroupCoverageCreateRequestLineOfCoverageEnum = "cancer"
	GroupCoverageCreateRequestLineOfCoverageEnumCriticalIllness   GroupCoverageCreateRequestLineOfCoverageEnum = "critical_illness"
	GroupCoverageCreateRequestLineOfCoverageEnumDental            GroupCoverageCreateRequestLineOfCoverageEnum = "dental"
	GroupCoverageCreateRequestLineOfCoverageEnumHospitalIndemnity GroupCoverageCreateRequestLineOfCoverageEnum = "hospital_indemnity"
	GroupCoverageCreateRequestLineOfCoverageEnumLife              GroupCoverageCreateRequestLineOfCoverageEnum = "life"
	GroupCoverageCreateRequestLineOfCoverageEnumLtd               GroupCoverageCreateRequestLineOfCoverageEnum = "ltd"
	GroupCoverageCreateRequestLineOfCoverageEnumMedical           GroupCoverageCreateRequestLineOfCoverageEnum = "medical"
	GroupCoverageCreateRequestLineOfCoverageEnumStd               GroupCoverageCreateRequestLineOfCoverageEnum = "std"
	GroupCoverageCreateRequestLineOfCoverageEnumVision            GroupCoverageCreateRequestLineOfCoverageEnum = "vision"
)

type GroupCoverageCreateRequest struct {
	ExistingCoverage       *bool                                        `json:"existing_coverage,omitempty"`
	LineOfCoverage         GroupCoverageCreateRequestLineOfCoverageEnum `json:"line_of_coverage"`
	Notes                  *string                                      `json:"notes,omitempty"`
	RequestedEffectiveDate time.Time                                    `json:"requested_effective_date"`
}
