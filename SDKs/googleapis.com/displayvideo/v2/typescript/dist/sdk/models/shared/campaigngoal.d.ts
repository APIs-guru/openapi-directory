import { SpeakeasyBase } from "../../../internal/utils";
import { PerformanceGoal } from "./performancegoal";
export declare enum CampaignGoalCampaignGoalTypeEnum {
    CampaignGoalTypeUnspecified = "CAMPAIGN_GOAL_TYPE_UNSPECIFIED",
    CampaignGoalTypeAppInstall = "CAMPAIGN_GOAL_TYPE_APP_INSTALL",
    CampaignGoalTypeBrandAwareness = "CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS",
    CampaignGoalTypeOfflineAction = "CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION",
    CampaignGoalTypeOnlineAction = "CAMPAIGN_GOAL_TYPE_ONLINE_ACTION"
}
/**
 * Settings that control the goal of a campaign.
**/
export declare class CampaignGoal extends SpeakeasyBase {
    campaignGoalType?: CampaignGoalCampaignGoalTypeEnum;
    performanceGoal?: PerformanceGoal;
}
