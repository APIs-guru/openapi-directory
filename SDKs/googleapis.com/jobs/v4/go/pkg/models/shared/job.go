package shared

type JobDegreeTypesEnum string

const (
	JobDegreeTypesEnumDegreeTypeUnspecified   JobDegreeTypesEnum = "DEGREE_TYPE_UNSPECIFIED"
	JobDegreeTypesEnumPrimaryEducation        JobDegreeTypesEnum = "PRIMARY_EDUCATION"
	JobDegreeTypesEnumLowerSecondaryEducation JobDegreeTypesEnum = "LOWER_SECONDARY_EDUCATION"
	JobDegreeTypesEnumUpperSecondaryEducation JobDegreeTypesEnum = "UPPER_SECONDARY_EDUCATION"
	JobDegreeTypesEnumAdultRemedialEducation  JobDegreeTypesEnum = "ADULT_REMEDIAL_EDUCATION"
	JobDegreeTypesEnumAssociatesOrEquivalent  JobDegreeTypesEnum = "ASSOCIATES_OR_EQUIVALENT"
	JobDegreeTypesEnumBachelorsOrEquivalent   JobDegreeTypesEnum = "BACHELORS_OR_EQUIVALENT"
	JobDegreeTypesEnumMastersOrEquivalent     JobDegreeTypesEnum = "MASTERS_OR_EQUIVALENT"
	JobDegreeTypesEnumDoctoralOrEquivalent    JobDegreeTypesEnum = "DOCTORAL_OR_EQUIVALENT"
)

type JobEmploymentTypesEnum string

const (
	JobEmploymentTypesEnumEmploymentTypeUnspecified JobEmploymentTypesEnum = "EMPLOYMENT_TYPE_UNSPECIFIED"
	JobEmploymentTypesEnumFullTime                  JobEmploymentTypesEnum = "FULL_TIME"
	JobEmploymentTypesEnumPartTime                  JobEmploymentTypesEnum = "PART_TIME"
	JobEmploymentTypesEnumContractor                JobEmploymentTypesEnum = "CONTRACTOR"
	JobEmploymentTypesEnumContractToHire            JobEmploymentTypesEnum = "CONTRACT_TO_HIRE"
	JobEmploymentTypesEnumTemporary                 JobEmploymentTypesEnum = "TEMPORARY"
	JobEmploymentTypesEnumIntern                    JobEmploymentTypesEnum = "INTERN"
	JobEmploymentTypesEnumVolunteer                 JobEmploymentTypesEnum = "VOLUNTEER"
	JobEmploymentTypesEnumPerDiem                   JobEmploymentTypesEnum = "PER_DIEM"
	JobEmploymentTypesEnumFlyInFlyOut               JobEmploymentTypesEnum = "FLY_IN_FLY_OUT"
	JobEmploymentTypesEnumOtherEmploymentType       JobEmploymentTypesEnum = "OTHER_EMPLOYMENT_TYPE"
)

type JobJobBenefitsEnum string

const (
	JobJobBenefitsEnumJobBenefitUnspecified JobJobBenefitsEnum = "JOB_BENEFIT_UNSPECIFIED"
	JobJobBenefitsEnumChildCare             JobJobBenefitsEnum = "CHILD_CARE"
	JobJobBenefitsEnumDental                JobJobBenefitsEnum = "DENTAL"
	JobJobBenefitsEnumDomesticPartner       JobJobBenefitsEnum = "DOMESTIC_PARTNER"
	JobJobBenefitsEnumFlexibleHours         JobJobBenefitsEnum = "FLEXIBLE_HOURS"
	JobJobBenefitsEnumMedical               JobJobBenefitsEnum = "MEDICAL"
	JobJobBenefitsEnumLifeInsurance         JobJobBenefitsEnum = "LIFE_INSURANCE"
	JobJobBenefitsEnumParentalLeave         JobJobBenefitsEnum = "PARENTAL_LEAVE"
	JobJobBenefitsEnumRetirementPlan        JobJobBenefitsEnum = "RETIREMENT_PLAN"
	JobJobBenefitsEnumSickDays              JobJobBenefitsEnum = "SICK_DAYS"
	JobJobBenefitsEnumVacation              JobJobBenefitsEnum = "VACATION"
	JobJobBenefitsEnumVision                JobJobBenefitsEnum = "VISION"
)

type JobJobLevelEnum string

const (
	JobJobLevelEnumJobLevelUnspecified JobJobLevelEnum = "JOB_LEVEL_UNSPECIFIED"
	JobJobLevelEnumEntryLevel          JobJobLevelEnum = "ENTRY_LEVEL"
	JobJobLevelEnumExperienced         JobJobLevelEnum = "EXPERIENCED"
	JobJobLevelEnumManager             JobJobLevelEnum = "MANAGER"
	JobJobLevelEnumDirector            JobJobLevelEnum = "DIRECTOR"
	JobJobLevelEnumExecutive           JobJobLevelEnum = "EXECUTIVE"
)

type JobPostingRegionEnum string

const (
	JobPostingRegionEnumPostingRegionUnspecified JobPostingRegionEnum = "POSTING_REGION_UNSPECIFIED"
	JobPostingRegionEnumAdministrativeArea       JobPostingRegionEnum = "ADMINISTRATIVE_AREA"
	JobPostingRegionEnumNation                   JobPostingRegionEnum = "NATION"
	JobPostingRegionEnumTelecommute              JobPostingRegionEnum = "TELECOMMUTE"
)

type JobVisibilityEnum string

const (
	JobVisibilityEnumVisibilityUnspecified JobVisibilityEnum = "VISIBILITY_UNSPECIFIED"
	JobVisibilityEnumAccountOnly           JobVisibilityEnum = "ACCOUNT_ONLY"
	JobVisibilityEnumSharedWithGoogle      JobVisibilityEnum = "SHARED_WITH_GOOGLE"
	JobVisibilityEnumSharedWithPublic      JobVisibilityEnum = "SHARED_WITH_PUBLIC"
)

// Job
// A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
type Job struct {
	Addresses          []string                   `json:"addresses,omitempty"`
	ApplicationInfo    *ApplicationInfo           `json:"applicationInfo,omitempty"`
	Company            *string                    `json:"company,omitempty"`
	CompanyDisplayName *string                    `json:"companyDisplayName,omitempty"`
	CompensationInfo   *CompensationInfo          `json:"compensationInfo,omitempty"`
	CustomAttributes   map[string]CustomAttribute `json:"customAttributes,omitempty"`
	DegreeTypes        []JobDegreeTypesEnum       `json:"degreeTypes,omitempty"`
	Department         *string                    `json:"department,omitempty"`
	DerivedInfo        *JobDerivedInfo            `json:"derivedInfo,omitempty"`
	Description        *string                    `json:"description,omitempty"`
	EmploymentTypes    []JobEmploymentTypesEnum   `json:"employmentTypes,omitempty"`
	Incentives         *string                    `json:"incentives,omitempty"`
	JobBenefits        []JobJobBenefitsEnum       `json:"jobBenefits,omitempty"`
	JobEndTime         *string                    `json:"jobEndTime,omitempty"`
	JobLevel           *JobJobLevelEnum           `json:"jobLevel,omitempty"`
	JobStartTime       *string                    `json:"jobStartTime,omitempty"`
	LanguageCode       *string                    `json:"languageCode,omitempty"`
	Name               *string                    `json:"name,omitempty"`
	PostingCreateTime  *string                    `json:"postingCreateTime,omitempty"`
	PostingExpireTime  *string                    `json:"postingExpireTime,omitempty"`
	PostingPublishTime *string                    `json:"postingPublishTime,omitempty"`
	PostingRegion      *JobPostingRegionEnum      `json:"postingRegion,omitempty"`
	PostingUpdateTime  *string                    `json:"postingUpdateTime,omitempty"`
	ProcessingOptions  *ProcessingOptions         `json:"processingOptions,omitempty"`
	PromotionValue     *int32                     `json:"promotionValue,omitempty"`
	Qualifications     *string                    `json:"qualifications,omitempty"`
	RequisitionID      *string                    `json:"requisitionId,omitempty"`
	Responsibilities   *string                    `json:"responsibilities,omitempty"`
	Title              *string                    `json:"title,omitempty"`
	Visibility         *JobVisibilityEnum         `json:"visibility,omitempty"`
}

// JobInput
// A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
type JobInput struct {
	Addresses          []string                   `json:"addresses,omitempty"`
	ApplicationInfo    *ApplicationInfo           `json:"applicationInfo,omitempty"`
	Company            *string                    `json:"company,omitempty"`
	CompensationInfo   *CompensationInfo          `json:"compensationInfo,omitempty"`
	CustomAttributes   map[string]CustomAttribute `json:"customAttributes,omitempty"`
	DegreeTypes        []JobDegreeTypesEnum       `json:"degreeTypes,omitempty"`
	Department         *string                    `json:"department,omitempty"`
	DerivedInfo        *JobDerivedInfo            `json:"derivedInfo,omitempty"`
	Description        *string                    `json:"description,omitempty"`
	EmploymentTypes    []JobEmploymentTypesEnum   `json:"employmentTypes,omitempty"`
	Incentives         *string                    `json:"incentives,omitempty"`
	JobBenefits        []JobJobBenefitsEnum       `json:"jobBenefits,omitempty"`
	JobEndTime         *string                    `json:"jobEndTime,omitempty"`
	JobLevel           *JobJobLevelEnum           `json:"jobLevel,omitempty"`
	JobStartTime       *string                    `json:"jobStartTime,omitempty"`
	LanguageCode       *string                    `json:"languageCode,omitempty"`
	Name               *string                    `json:"name,omitempty"`
	PostingExpireTime  *string                    `json:"postingExpireTime,omitempty"`
	PostingPublishTime *string                    `json:"postingPublishTime,omitempty"`
	PostingRegion      *JobPostingRegionEnum      `json:"postingRegion,omitempty"`
	ProcessingOptions  *ProcessingOptions         `json:"processingOptions,omitempty"`
	PromotionValue     *int32                     `json:"promotionValue,omitempty"`
	Qualifications     *string                    `json:"qualifications,omitempty"`
	RequisitionID      *string                    `json:"requisitionId,omitempty"`
	Responsibilities   *string                    `json:"responsibilities,omitempty"`
	Title              *string                    `json:"title,omitempty"`
	Visibility         *JobVisibilityEnum         `json:"visibility,omitempty"`
}
