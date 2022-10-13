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

type Project struct {
	AccountID                *string                      `json:"accountId"`
	AdvertiserID             *string                      `json:"advertiserId"`
	AudienceAgeGroup         *ProjectAudienceAgeGroupEnum `json:"audienceAgeGroup"`
	AudienceGender           *ProjectAudienceGenderEnum   `json:"audienceGender"`
	Budget                   *string                      `json:"budget"`
	ClientBillingCode        *string                      `json:"clientBillingCode"`
	ClientName               *string                      `json:"clientName"`
	EndDate                  *time.Time                   `json:"endDate"`
	ID                       *string                      `json:"id"`
	Kind                     *string                      `json:"kind"`
	LastModifiedInfo         *LastModifiedInfo            `json:"lastModifiedInfo"`
	Name                     *string                      `json:"name"`
	Overview                 *string                      `json:"overview"`
	StartDate                *time.Time                   `json:"startDate"`
	SubaccountID             *string                      `json:"subaccountId"`
	TargetClicks             *string                      `json:"targetClicks"`
	TargetConversions        *string                      `json:"targetConversions"`
	TargetCpaNanos           *string                      `json:"targetCpaNanos"`
	TargetCpcNanos           *string                      `json:"targetCpcNanos"`
	TargetCpmActiveViewNanos *string                      `json:"targetCpmActiveViewNanos"`
	TargetCpmNanos           *string                      `json:"targetCpmNanos"`
	TargetImpressions        *string                      `json:"targetImpressions"`
}
