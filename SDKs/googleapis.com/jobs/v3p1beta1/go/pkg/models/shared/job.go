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

type Job struct {
	Addresses          []string                   `json:"addresses"`
	ApplicationInfo    *ApplicationInfo           `json:"applicationInfo"`
	CompanyDisplayName *string                    `json:"companyDisplayName"`
	CompanyName        *string                    `json:"companyName"`
	CompensationInfo   *CompensationInfo          `json:"compensationInfo"`
	CustomAttributes   map[string]CustomAttribute `json:"customAttributes"`
	DegreeTypes        []JobDegreeTypesEnum       `json:"degreeTypes"`
	Department         *string                    `json:"department"`
	DerivedInfo        *JobDerivedInfo            `json:"derivedInfo"`
	Description        *string                    `json:"description"`
	EmploymentTypes    []JobEmploymentTypesEnum   `json:"employmentTypes"`
	Incentives         *string                    `json:"incentives"`
	JobBenefits        []JobJobBenefitsEnum       `json:"jobBenefits"`
	JobEndTime         *string                    `json:"jobEndTime"`
	JobLevel           *JobJobLevelEnum           `json:"jobLevel"`
	JobStartTime       *string                    `json:"jobStartTime"`
	LanguageCode       *string                    `json:"languageCode"`
	Name               *string                    `json:"name"`
	PostingCreateTime  *string                    `json:"postingCreateTime"`
	PostingExpireTime  *string                    `json:"postingExpireTime"`
	PostingPublishTime *string                    `json:"postingPublishTime"`
	PostingRegion      *JobPostingRegionEnum      `json:"postingRegion"`
	PostingUpdateTime  *string                    `json:"postingUpdateTime"`
	ProcessingOptions  *ProcessingOptions         `json:"processingOptions"`
	PromotionValue     *int32                     `json:"promotionValue"`
	Qualifications     *string                    `json:"qualifications"`
	RequisitionID      *string                    `json:"requisitionId"`
	Responsibilities   *string                    `json:"responsibilities"`
	Title              *string                    `json:"title"`
	Visibility         *JobVisibilityEnum         `json:"visibility"`
}
