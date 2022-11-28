import { SpeakeasyBase } from "../../../internal/utils";
import { LastModifiedInfo } from "./lastmodifiedinfo";
export declare enum ProjectAudienceAgeGroupEnum {
    PlanningAudienceAge1824 = "PLANNING_AUDIENCE_AGE_18_24",
    PlanningAudienceAge2534 = "PLANNING_AUDIENCE_AGE_25_34",
    PlanningAudienceAge3544 = "PLANNING_AUDIENCE_AGE_35_44",
    PlanningAudienceAge4554 = "PLANNING_AUDIENCE_AGE_45_54",
    PlanningAudienceAge5564 = "PLANNING_AUDIENCE_AGE_55_64",
    PlanningAudienceAge65OrMore = "PLANNING_AUDIENCE_AGE_65_OR_MORE",
    PlanningAudienceAgeUnknown = "PLANNING_AUDIENCE_AGE_UNKNOWN"
}
export declare enum ProjectAudienceGenderEnum {
    PlanningAudienceGenderMale = "PLANNING_AUDIENCE_GENDER_MALE",
    PlanningAudienceGenderFemale = "PLANNING_AUDIENCE_GENDER_FEMALE"
}
/**
 * Contains properties of a Planning project.
**/
export declare class Project extends SpeakeasyBase {
    accountId?: string;
    advertiserId?: string;
    audienceAgeGroup?: ProjectAudienceAgeGroupEnum;
    audienceGender?: ProjectAudienceGenderEnum;
    budget?: string;
    clientBillingCode?: string;
    clientName?: string;
    endDate?: Date;
    id?: string;
    kind?: string;
    lastModifiedInfo?: LastModifiedInfo;
    name?: string;
    overview?: string;
    startDate?: Date;
    subaccountId?: string;
    targetClicks?: string;
    targetConversions?: string;
    targetCpaNanos?: string;
    targetCpcNanos?: string;
    targetCpmActiveViewNanos?: string;
    targetCpmNanos?: string;
    targetImpressions?: string;
}
