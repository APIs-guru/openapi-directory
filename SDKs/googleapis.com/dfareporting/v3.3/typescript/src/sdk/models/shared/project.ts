import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LastModifiedInfo } from "./lastmodifiedinfo";

export enum ProjectAudienceAgeGroupEnum {
    PlanningAudienceAge1824 = "PLANNING_AUDIENCE_AGE_18_24"
,    PlanningAudienceAge2534 = "PLANNING_AUDIENCE_AGE_25_34"
,    PlanningAudienceAge3544 = "PLANNING_AUDIENCE_AGE_35_44"
,    PlanningAudienceAge4554 = "PLANNING_AUDIENCE_AGE_45_54"
,    PlanningAudienceAge5564 = "PLANNING_AUDIENCE_AGE_55_64"
,    PlanningAudienceAge65OrMore = "PLANNING_AUDIENCE_AGE_65_OR_MORE"
,    PlanningAudienceAgeUnknown = "PLANNING_AUDIENCE_AGE_UNKNOWN"
}

export enum ProjectAudienceGenderEnum {
    PlanningAudienceGenderMale = "PLANNING_AUDIENCE_GENDER_MALE"
,    PlanningAudienceGenderFemale = "PLANNING_AUDIENCE_GENDER_FEMALE"
}


// Project
/** 
 * Contains properties of a Planning project.
**/
export class Project extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=audienceAgeGroup" })
  audienceAgeGroup?: ProjectAudienceAgeGroupEnum;

  @Metadata({ data: "json, name=audienceGender" })
  audienceGender?: ProjectAudienceGenderEnum;

  @Metadata({ data: "json, name=budget" })
  budget?: string;

  @Metadata({ data: "json, name=clientBillingCode" })
  clientBillingCode?: string;

  @Metadata({ data: "json, name=clientName" })
  clientName?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=overview" })
  overview?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=targetClicks" })
  targetClicks?: string;

  @Metadata({ data: "json, name=targetConversions" })
  targetConversions?: string;

  @Metadata({ data: "json, name=targetCpaNanos" })
  targetCpaNanos?: string;

  @Metadata({ data: "json, name=targetCpcNanos" })
  targetCpcNanos?: string;

  @Metadata({ data: "json, name=targetCpmActiveViewNanos" })
  targetCpmActiveViewNanos?: string;

  @Metadata({ data: "json, name=targetCpmNanos" })
  targetCpmNanos?: string;

  @Metadata({ data: "json, name=targetImpressions" })
  targetImpressions?: string;
}
