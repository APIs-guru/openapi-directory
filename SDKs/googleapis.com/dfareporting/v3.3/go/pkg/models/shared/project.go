package shared

import (
	"time"
)

type ProjectAudienceAgeGroupEnum string

const (
	ProjectAudienceAgeGroupEnumPlanningAudienceAge1824     ProjectAudienceAgeGroupEnum = "PLANNING_AUDIENCE_AGE_18_24"
	ProjectAudienceAgeGroupEnumPlanningAudienceAge2534     ProjectAudienceAgeGroupEnum = "PLANNING_AUDIENCE_AGE_25_34"
	ProjectAudienceAgeGroupEnumPlanningAudienceAge3544     ProjectAudienceAgeGroupEnum = "PLANNING_AUDIENCE_AGE_35_44"
	ProjectAudienceAgeGroupEnumPlanningAudienceAge4554     ProjectAudienceAgeGroupEnum = "PLANNING_AUDIENCE_AGE_45_54"
	ProjectAudienceAgeGroupEnumPlanningAudienceAge5564     ProjectAudienceAgeGroupEnum = "PLANNING_AUDIENCE_AGE_55_64"
	ProjectAudienceAgeGroupEnumPlanningAudienceAge65OrMore ProjectAudienceAgeGroupEnum = "PLANNING_AUDIENCE_AGE_65_OR_MORE"
	ProjectAudienceAgeGroupEnumPlanningAudienceAgeUnknown  ProjectAudienceAgeGroupEnum = "PLANNING_AUDIENCE_AGE_UNKNOWN"
)

type ProjectAudienceGenderEnum string

const (
	ProjectAudienceGenderEnumPlanningAudienceGenderMale   ProjectAudienceGenderEnum = "PLANNING_AUDIENCE_GENDER_MALE"
	ProjectAudienceGenderEnumPlanningAudienceGenderFemale ProjectAudienceGenderEnum = "PLANNING_AUDIENCE_GENDER_FEMALE"
)

// Project
// Contains properties of a Planning project.
type Project struct {
	AccountID                *string                      `json:"accountId,omitempty"`
	AdvertiserID             *string                      `json:"advertiserId,omitempty"`
	AudienceAgeGroup         *ProjectAudienceAgeGroupEnum `json:"audienceAgeGroup,omitempty"`
	AudienceGender           *ProjectAudienceGenderEnum   `json:"audienceGender,omitempty"`
	Budget                   *string                      `json:"budget,omitempty"`
	ClientBillingCode        *string                      `json:"clientBillingCode,omitempty"`
	ClientName               *string                      `json:"clientName,omitempty"`
	EndDate                  *time.Time                   `json:"endDate,omitempty"`
	ID                       *string                      `json:"id,omitempty"`
	Kind                     *string                      `json:"kind,omitempty"`
	LastModifiedInfo         *LastModifiedInfo            `json:"lastModifiedInfo,omitempty"`
	Name                     *string                      `json:"name,omitempty"`
	Overview                 *string                      `json:"overview,omitempty"`
	StartDate                *time.Time                   `json:"startDate,omitempty"`
	SubaccountID             *string                      `json:"subaccountId,omitempty"`
	TargetClicks             *string                      `json:"targetClicks,omitempty"`
	TargetConversions        *string                      `json:"targetConversions,omitempty"`
	TargetCpaNanos           *string                      `json:"targetCpaNanos,omitempty"`
	TargetCpcNanos           *string                      `json:"targetCpcNanos,omitempty"`
	TargetCpmActiveViewNanos *string                      `json:"targetCpmActiveViewNanos,omitempty"`
	TargetCpmNanos           *string                      `json:"targetCpmNanos,omitempty"`
	TargetImpressions        *string                      `json:"targetImpressions,omitempty"`
}
