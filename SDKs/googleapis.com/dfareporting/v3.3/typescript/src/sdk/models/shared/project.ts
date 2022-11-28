import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LastModifiedInfo } from "./lastmodifiedinfo";


export enum ProjectAudienceAgeGroupEnum {
    PlanningAudienceAge1824 = "PLANNING_AUDIENCE_AGE_18_24",
    PlanningAudienceAge2534 = "PLANNING_AUDIENCE_AGE_25_34",
    PlanningAudienceAge3544 = "PLANNING_AUDIENCE_AGE_35_44",
    PlanningAudienceAge4554 = "PLANNING_AUDIENCE_AGE_45_54",
    PlanningAudienceAge5564 = "PLANNING_AUDIENCE_AGE_55_64",
    PlanningAudienceAge65OrMore = "PLANNING_AUDIENCE_AGE_65_OR_MORE",
    PlanningAudienceAgeUnknown = "PLANNING_AUDIENCE_AGE_UNKNOWN"
}

export enum ProjectAudienceGenderEnum {
    PlanningAudienceGenderMale = "PLANNING_AUDIENCE_GENDER_MALE",
    PlanningAudienceGenderFemale = "PLANNING_AUDIENCE_GENDER_FEMALE"
}


// Project
/** 
 * Contains properties of a Planning project.
**/
export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=audienceAgeGroup" })
  audienceAgeGroup?: ProjectAudienceAgeGroupEnum;

  @SpeakeasyMetadata({ data: "json, name=audienceGender" })
  audienceGender?: ProjectAudienceGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=budget" })
  budget?: string;

  @SpeakeasyMetadata({ data: "json, name=clientBillingCode" })
  clientBillingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=clientName" })
  clientName?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetClicks" })
  targetClicks?: string;

  @SpeakeasyMetadata({ data: "json, name=targetConversions" })
  targetConversions?: string;

  @SpeakeasyMetadata({ data: "json, name=targetCpaNanos" })
  targetCpaNanos?: string;

  @SpeakeasyMetadata({ data: "json, name=targetCpcNanos" })
  targetCpcNanos?: string;

  @SpeakeasyMetadata({ data: "json, name=targetCpmActiveViewNanos" })
  targetCpmActiveViewNanos?: string;

  @SpeakeasyMetadata({ data: "json, name=targetCpmNanos" })
  targetCpmNanos?: string;

  @SpeakeasyMetadata({ data: "json, name=targetImpressions" })
  targetImpressions?: string;
}
