import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationInfo } from "./applicationinfo";
import { CompensationInfo } from "./compensationinfo";
import { CustomAttribute } from "./customattribute";
import { JobDerivedInfo } from "./jobderivedinfo";
import { ProcessingOptions } from "./processingoptions";


export enum JobDegreeTypesEnum {
    DegreeTypeUnspecified = "DEGREE_TYPE_UNSPECIFIED",
    PrimaryEducation = "PRIMARY_EDUCATION",
    LowerSecondaryEducation = "LOWER_SECONDARY_EDUCATION",
    UpperSecondaryEducation = "UPPER_SECONDARY_EDUCATION",
    AdultRemedialEducation = "ADULT_REMEDIAL_EDUCATION",
    AssociatesOrEquivalent = "ASSOCIATES_OR_EQUIVALENT",
    BachelorsOrEquivalent = "BACHELORS_OR_EQUIVALENT",
    MastersOrEquivalent = "MASTERS_OR_EQUIVALENT",
    DoctoralOrEquivalent = "DOCTORAL_OR_EQUIVALENT"
}

export enum JobEmploymentTypesEnum {
    EmploymentTypeUnspecified = "EMPLOYMENT_TYPE_UNSPECIFIED",
    FullTime = "FULL_TIME",
    PartTime = "PART_TIME",
    Contractor = "CONTRACTOR",
    ContractToHire = "CONTRACT_TO_HIRE",
    Temporary = "TEMPORARY",
    Intern = "INTERN",
    Volunteer = "VOLUNTEER",
    PerDiem = "PER_DIEM",
    FlyInFlyOut = "FLY_IN_FLY_OUT",
    OtherEmploymentType = "OTHER_EMPLOYMENT_TYPE"
}

export enum JobJobBenefitsEnum {
    JobBenefitUnspecified = "JOB_BENEFIT_UNSPECIFIED",
    ChildCare = "CHILD_CARE",
    Dental = "DENTAL",
    DomesticPartner = "DOMESTIC_PARTNER",
    FlexibleHours = "FLEXIBLE_HOURS",
    Medical = "MEDICAL",
    LifeInsurance = "LIFE_INSURANCE",
    ParentalLeave = "PARENTAL_LEAVE",
    RetirementPlan = "RETIREMENT_PLAN",
    SickDays = "SICK_DAYS",
    Vacation = "VACATION",
    Vision = "VISION"
}

export enum JobJobLevelEnum {
    JobLevelUnspecified = "JOB_LEVEL_UNSPECIFIED",
    EntryLevel = "ENTRY_LEVEL",
    Experienced = "EXPERIENCED",
    Manager = "MANAGER",
    Director = "DIRECTOR",
    Executive = "EXECUTIVE"
}

export enum JobPostingRegionEnum {
    PostingRegionUnspecified = "POSTING_REGION_UNSPECIFIED",
    AdministrativeArea = "ADMINISTRATIVE_AREA",
    Nation = "NATION",
    Telecommute = "TELECOMMUTE"
}

export enum JobVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED",
    AccountOnly = "ACCOUNT_ONLY",
    SharedWithGoogle = "SHARED_WITH_GOOGLE",
    SharedWithPublic = "SHARED_WITH_PUBLIC"
}


// Job
/** 
 * A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses" })
  addresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=applicationInfo" })
  applicationInfo?: ApplicationInfo;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=companyDisplayName" })
  companyDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=compensationInfo" })
  compensationInfo?: CompensationInfo;

  @SpeakeasyMetadata({ data: "json, name=customAttributes", elemType: CustomAttribute })
  customAttributes?: Map<string, CustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=degreeTypes" })
  degreeTypes?: JobDegreeTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=derivedInfo" })
  derivedInfo?: JobDerivedInfo;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=employmentTypes" })
  employmentTypes?: JobEmploymentTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=incentives" })
  incentives?: string;

  @SpeakeasyMetadata({ data: "json, name=jobBenefits" })
  jobBenefits?: JobJobBenefitsEnum[];

  @SpeakeasyMetadata({ data: "json, name=jobEndTime" })
  jobEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=jobLevel" })
  jobLevel?: JobJobLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=jobStartTime" })
  jobStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=postingCreateTime" })
  postingCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=postingExpireTime" })
  postingExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=postingPublishTime" })
  postingPublishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=postingRegion" })
  postingRegion?: JobPostingRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=postingUpdateTime" })
  postingUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=processingOptions" })
  processingOptions?: ProcessingOptions;

  @SpeakeasyMetadata({ data: "json, name=promotionValue" })
  promotionValue?: number;

  @SpeakeasyMetadata({ data: "json, name=qualifications" })
  qualifications?: string;

  @SpeakeasyMetadata({ data: "json, name=requisitionId" })
  requisitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=responsibilities" })
  responsibilities?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: JobVisibilityEnum;
}


// JobInput
/** 
 * A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
**/
export class JobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses" })
  addresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=applicationInfo" })
  applicationInfo?: ApplicationInfo;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=compensationInfo" })
  compensationInfo?: CompensationInfo;

  @SpeakeasyMetadata({ data: "json, name=customAttributes", elemType: CustomAttribute })
  customAttributes?: Map<string, CustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=degreeTypes" })
  degreeTypes?: JobDegreeTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=derivedInfo" })
  derivedInfo?: JobDerivedInfo;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=employmentTypes" })
  employmentTypes?: JobEmploymentTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=incentives" })
  incentives?: string;

  @SpeakeasyMetadata({ data: "json, name=jobBenefits" })
  jobBenefits?: JobJobBenefitsEnum[];

  @SpeakeasyMetadata({ data: "json, name=jobEndTime" })
  jobEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=jobLevel" })
  jobLevel?: JobJobLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=jobStartTime" })
  jobStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=postingExpireTime" })
  postingExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=postingPublishTime" })
  postingPublishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=postingRegion" })
  postingRegion?: JobPostingRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=processingOptions" })
  processingOptions?: ProcessingOptions;

  @SpeakeasyMetadata({ data: "json, name=promotionValue" })
  promotionValue?: number;

  @SpeakeasyMetadata({ data: "json, name=qualifications" })
  qualifications?: string;

  @SpeakeasyMetadata({ data: "json, name=requisitionId" })
  requisitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=responsibilities" })
  responsibilities?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: JobVisibilityEnum;
}
