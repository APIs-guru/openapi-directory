var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationInfo } from "./applicationinfo";
import { CompensationInfo } from "./compensationinfo";
import { CustomAttribute } from "./customattribute";
import { JobDerivedInfo } from "./jobderivedinfo";
import { ProcessingOptions } from "./processingoptions";
export var JobDegreeTypesEnum;
(function (JobDegreeTypesEnum) {
    JobDegreeTypesEnum["DegreeTypeUnspecified"] = "DEGREE_TYPE_UNSPECIFIED";
    JobDegreeTypesEnum["PrimaryEducation"] = "PRIMARY_EDUCATION";
    JobDegreeTypesEnum["LowerSecondaryEducation"] = "LOWER_SECONDARY_EDUCATION";
    JobDegreeTypesEnum["UpperSecondaryEducation"] = "UPPER_SECONDARY_EDUCATION";
    JobDegreeTypesEnum["AdultRemedialEducation"] = "ADULT_REMEDIAL_EDUCATION";
    JobDegreeTypesEnum["AssociatesOrEquivalent"] = "ASSOCIATES_OR_EQUIVALENT";
    JobDegreeTypesEnum["BachelorsOrEquivalent"] = "BACHELORS_OR_EQUIVALENT";
    JobDegreeTypesEnum["MastersOrEquivalent"] = "MASTERS_OR_EQUIVALENT";
    JobDegreeTypesEnum["DoctoralOrEquivalent"] = "DOCTORAL_OR_EQUIVALENT";
})(JobDegreeTypesEnum || (JobDegreeTypesEnum = {}));
export var JobEmploymentTypesEnum;
(function (JobEmploymentTypesEnum) {
    JobEmploymentTypesEnum["EmploymentTypeUnspecified"] = "EMPLOYMENT_TYPE_UNSPECIFIED";
    JobEmploymentTypesEnum["FullTime"] = "FULL_TIME";
    JobEmploymentTypesEnum["PartTime"] = "PART_TIME";
    JobEmploymentTypesEnum["Contractor"] = "CONTRACTOR";
    JobEmploymentTypesEnum["ContractToHire"] = "CONTRACT_TO_HIRE";
    JobEmploymentTypesEnum["Temporary"] = "TEMPORARY";
    JobEmploymentTypesEnum["Intern"] = "INTERN";
    JobEmploymentTypesEnum["Volunteer"] = "VOLUNTEER";
    JobEmploymentTypesEnum["PerDiem"] = "PER_DIEM";
    JobEmploymentTypesEnum["FlyInFlyOut"] = "FLY_IN_FLY_OUT";
    JobEmploymentTypesEnum["OtherEmploymentType"] = "OTHER_EMPLOYMENT_TYPE";
})(JobEmploymentTypesEnum || (JobEmploymentTypesEnum = {}));
export var JobJobBenefitsEnum;
(function (JobJobBenefitsEnum) {
    JobJobBenefitsEnum["JobBenefitUnspecified"] = "JOB_BENEFIT_UNSPECIFIED";
    JobJobBenefitsEnum["ChildCare"] = "CHILD_CARE";
    JobJobBenefitsEnum["Dental"] = "DENTAL";
    JobJobBenefitsEnum["DomesticPartner"] = "DOMESTIC_PARTNER";
    JobJobBenefitsEnum["FlexibleHours"] = "FLEXIBLE_HOURS";
    JobJobBenefitsEnum["Medical"] = "MEDICAL";
    JobJobBenefitsEnum["LifeInsurance"] = "LIFE_INSURANCE";
    JobJobBenefitsEnum["ParentalLeave"] = "PARENTAL_LEAVE";
    JobJobBenefitsEnum["RetirementPlan"] = "RETIREMENT_PLAN";
    JobJobBenefitsEnum["SickDays"] = "SICK_DAYS";
    JobJobBenefitsEnum["Vacation"] = "VACATION";
    JobJobBenefitsEnum["Vision"] = "VISION";
})(JobJobBenefitsEnum || (JobJobBenefitsEnum = {}));
export var JobJobLevelEnum;
(function (JobJobLevelEnum) {
    JobJobLevelEnum["JobLevelUnspecified"] = "JOB_LEVEL_UNSPECIFIED";
    JobJobLevelEnum["EntryLevel"] = "ENTRY_LEVEL";
    JobJobLevelEnum["Experienced"] = "EXPERIENCED";
    JobJobLevelEnum["Manager"] = "MANAGER";
    JobJobLevelEnum["Director"] = "DIRECTOR";
    JobJobLevelEnum["Executive"] = "EXECUTIVE";
})(JobJobLevelEnum || (JobJobLevelEnum = {}));
export var JobPostingRegionEnum;
(function (JobPostingRegionEnum) {
    JobPostingRegionEnum["PostingRegionUnspecified"] = "POSTING_REGION_UNSPECIFIED";
    JobPostingRegionEnum["AdministrativeArea"] = "ADMINISTRATIVE_AREA";
    JobPostingRegionEnum["Nation"] = "NATION";
    JobPostingRegionEnum["Telecommute"] = "TELECOMMUTE";
})(JobPostingRegionEnum || (JobPostingRegionEnum = {}));
export var JobVisibilityEnum;
(function (JobVisibilityEnum) {
    JobVisibilityEnum["VisibilityUnspecified"] = "VISIBILITY_UNSPECIFIED";
    JobVisibilityEnum["AccountOnly"] = "ACCOUNT_ONLY";
    JobVisibilityEnum["SharedWithGoogle"] = "SHARED_WITH_GOOGLE";
    JobVisibilityEnum["SharedWithPublic"] = "SHARED_WITH_PUBLIC";
})(JobVisibilityEnum || (JobVisibilityEnum = {}));
// Job
/**
 * A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
**/
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses" }),
        __metadata("design:type", Array)
    ], Job.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationInfo" }),
        __metadata("design:type", ApplicationInfo)
    ], Job.prototype, "applicationInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyDisplayName" }),
        __metadata("design:type", String)
    ], Job.prototype, "companyDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], Job.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compensationInfo" }),
        __metadata("design:type", CompensationInfo)
    ], Job.prototype, "compensationInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customAttributes", elemType: CustomAttribute }),
        __metadata("design:type", Map)
    ], Job.prototype, "customAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=degreeTypes" }),
        __metadata("design:type", Array)
    ], Job.prototype, "degreeTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department" }),
        __metadata("design:type", String)
    ], Job.prototype, "department", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=derivedInfo" }),
        __metadata("design:type", JobDerivedInfo)
    ], Job.prototype, "derivedInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Job.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employmentTypes" }),
        __metadata("design:type", Array)
    ], Job.prototype, "employmentTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incentives" }),
        __metadata("design:type", String)
    ], Job.prototype, "incentives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobBenefits" }),
        __metadata("design:type", Array)
    ], Job.prototype, "jobBenefits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobEndTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "jobEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobLevel" }),
        __metadata("design:type", String)
    ], Job.prototype, "jobLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobStartTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "jobStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], Job.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Job.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postingCreateTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "postingCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postingExpireTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "postingExpireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postingPublishTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "postingPublishTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postingRegion" }),
        __metadata("design:type", String)
    ], Job.prototype, "postingRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postingUpdateTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "postingUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingOptions" }),
        __metadata("design:type", ProcessingOptions)
    ], Job.prototype, "processingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionValue" }),
        __metadata("design:type", Number)
    ], Job.prototype, "promotionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qualifications" }),
        __metadata("design:type", String)
    ], Job.prototype, "qualifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requisitionId" }),
        __metadata("design:type", String)
    ], Job.prototype, "requisitionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responsibilities" }),
        __metadata("design:type", String)
    ], Job.prototype, "responsibilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Job.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], Job.prototype, "visibility", void 0);
    return Job;
}(SpeakeasyBase));
export { Job };
