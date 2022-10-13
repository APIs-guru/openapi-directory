package shared

type CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum string

const (
	CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnumCustomBiddingAlgorithmTypeUnspecified CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum = "CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED"
	CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnumScriptBased                           CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum = "SCRIPT_BASED"
	CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnumAdsDataHubBased                       CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum = "ADS_DATA_HUB_BASED"
	CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnumGoalBuilderBased                      CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum = "GOAL_BUILDER_BASED"
)

type CustomBiddingAlgorithmEntityStatusEnum string

const (
	CustomBiddingAlgorithmEntityStatusEnumEntityStatusUnspecified          CustomBiddingAlgorithmEntityStatusEnum = "ENTITY_STATUS_UNSPECIFIED"
	CustomBiddingAlgorithmEntityStatusEnumEntityStatusActive               CustomBiddingAlgorithmEntityStatusEnum = "ENTITY_STATUS_ACTIVE"
	CustomBiddingAlgorithmEntityStatusEnumEntityStatusArchived             CustomBiddingAlgorithmEntityStatusEnum = "ENTITY_STATUS_ARCHIVED"
	CustomBiddingAlgorithmEntityStatusEnumEntityStatusDraft                CustomBiddingAlgorithmEntityStatusEnum = "ENTITY_STATUS_DRAFT"
	CustomBiddingAlgorithmEntityStatusEnumEntityStatusPaused               CustomBiddingAlgorithmEntityStatusEnum = "ENTITY_STATUS_PAUSED"
	CustomBiddingAlgorithmEntityStatusEnumEntityStatusScheduledForDeletion CustomBiddingAlgorithmEntityStatusEnum = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
)

type CustomBiddingAlgorithm struct {
	AdvertiserID               *string                                               `json:"advertiserId"`
	CustomBiddingAlgorithmID   *string                                               `json:"customBiddingAlgorithmId"`
	CustomBiddingAlgorithmType *CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum `json:"customBiddingAlgorithmType"`
	DisplayName                *string                                               `json:"displayName"`
	EntityStatus               *CustomBiddingAlgorithmEntityStatusEnum               `json:"entityStatus"`
	ModelDetails               []CustomBiddingModelDetails                           `json:"modelDetails"`
	Name                       *string                                               `json:"name"`
	PartnerID                  *string                                               `json:"partnerId"`
	SharedAdvertiserIds        []string                                              `json:"sharedAdvertiserIds"`
}
