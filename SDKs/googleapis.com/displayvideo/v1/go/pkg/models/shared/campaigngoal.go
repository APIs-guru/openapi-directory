package shared

type CampaignGoalCampaignGoalTypeEnum string

const (
	CampaignGoalCampaignGoalTypeEnumCampaignGoalTypeUnspecified    CampaignGoalCampaignGoalTypeEnum = "CAMPAIGN_GOAL_TYPE_UNSPECIFIED"
	CampaignGoalCampaignGoalTypeEnumCampaignGoalTypeAppInstall     CampaignGoalCampaignGoalTypeEnum = "CAMPAIGN_GOAL_TYPE_APP_INSTALL"
	CampaignGoalCampaignGoalTypeEnumCampaignGoalTypeBrandAwareness CampaignGoalCampaignGoalTypeEnum = "CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS"
	CampaignGoalCampaignGoalTypeEnumCampaignGoalTypeOfflineAction  CampaignGoalCampaignGoalTypeEnum = "CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION"
	CampaignGoalCampaignGoalTypeEnumCampaignGoalTypeOnlineAction   CampaignGoalCampaignGoalTypeEnum = "CAMPAIGN_GOAL_TYPE_ONLINE_ACTION"
)

type CampaignGoal struct {
	CampaignGoalType *CampaignGoalCampaignGoalTypeEnum `json:"campaignGoalType"`
	PerformanceGoal  *PerformanceGoal                  `json:"performanceGoal"`
}
