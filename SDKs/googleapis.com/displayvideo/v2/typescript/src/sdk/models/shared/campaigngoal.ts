import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PerformanceGoal } from "./performancegoal";

export enum CampaignGoalCampaignGoalTypeEnum {
    CampaignGoalTypeUnspecified = "CAMPAIGN_GOAL_TYPE_UNSPECIFIED"
,    CampaignGoalTypeAppInstall = "CAMPAIGN_GOAL_TYPE_APP_INSTALL"
,    CampaignGoalTypeBrandAwareness = "CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS"
,    CampaignGoalTypeOfflineAction = "CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION"
,    CampaignGoalTypeOnlineAction = "CAMPAIGN_GOAL_TYPE_ONLINE_ACTION"
}


// CampaignGoal
/** 
 * Settings that control the goal of a campaign.
**/
export class CampaignGoal extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignGoalType" })
  campaignGoalType?: CampaignGoalCampaignGoalTypeEnum;

  @Metadata({ data: "json, name=performanceGoal" })
  performanceGoal?: PerformanceGoal;
}
