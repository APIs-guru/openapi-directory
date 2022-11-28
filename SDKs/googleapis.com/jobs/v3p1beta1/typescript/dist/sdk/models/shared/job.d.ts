import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationInfo } from "./applicationinfo";
import { CompensationInfo } from "./compensationinfo";
import { CustomAttribute } from "./customattribute";
import { JobDerivedInfo } from "./jobderivedinfo";
import { ProcessingOptions } from "./processingoptions";
export declare enum JobDegreeTypesEnum {
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
export declare enum JobEmploymentTypesEnum {
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
export declare enum JobJobBenefitsEnum {
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
export declare enum JobJobLevelEnum {
    JobLevelUnspecified = "JOB_LEVEL_UNSPECIFIED",
    EntryLevel = "ENTRY_LEVEL",
    Experienced = "EXPERIENCED",
    Manager = "MANAGER",
    Director = "DIRECTOR",
    Executive = "EXECUTIVE"
}
export declare enum JobPostingRegionEnum {
    PostingRegionUnspecified = "POSTING_REGION_UNSPECIFIED",
    AdministrativeArea = "ADMINISTRATIVE_AREA",
    Nation = "NATION",
    Telecommute = "TELECOMMUTE"
}
export declare enum JobVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED",
    AccountOnly = "ACCOUNT_ONLY",
    SharedWithGoogle = "SHARED_WITH_GOOGLE",
    SharedWithPublic = "SHARED_WITH_PUBLIC"
}
/**
 * A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
**/
export declare class Job extends SpeakeasyBase {
    addresses?: string[];
    applicationInfo?: ApplicationInfo;
    companyDisplayName?: string;
    companyName?: string;
    compensationInfo?: CompensationInfo;
    customAttributes?: Map<string, CustomAttribute>;
    degreeTypes?: JobDegreeTypesEnum[];
    department?: string;
    derivedInfo?: JobDerivedInfo;
    description?: string;
    employmentTypes?: JobEmploymentTypesEnum[];
    incentives?: string;
    jobBenefits?: JobJobBenefitsEnum[];
    jobEndTime?: string;
    jobLevel?: JobJobLevelEnum;
    jobStartTime?: string;
    languageCode?: string;
    name?: string;
    postingCreateTime?: string;
    postingExpireTime?: string;
    postingPublishTime?: string;
    postingRegion?: JobPostingRegionEnum;
    postingUpdateTime?: string;
    processingOptions?: ProcessingOptions;
    promotionValue?: number;
    qualifications?: string;
    requisitionId?: string;
    responsibilities?: string;
    title?: string;
    visibility?: JobVisibilityEnum;
}
