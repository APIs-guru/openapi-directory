package shared




type CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum string

const (
    CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnumStateUnspecified CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum = "STATE_UNSPECIFIED"
CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnumEnabled CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum = "ENABLED"
CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnumDormant CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum = "DORMANT"
CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnumSuspended CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum = "SUSPENDED"
)



type CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum string

const (
    CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnumCustomBiddingAlgorithmTypeUnspecified CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum = "CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED"
CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnumScriptBased CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum = "SCRIPT_BASED"
CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnumAdsDataHubBased CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum = "ADS_DATA_HUB_BASED"
CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnumGoalBuilderBased CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum = "GOAL_BUILDER_BASED"
)



type CustomBiddingAlgorithmEntityStatusEnum string

const (
    CustomBiddingAlgorithmEntityStatusEnumEntityStatusUnspecified CustomBiddingAlgorithmEntityStatusEnum = "ENTITY_STATUS_UNSPECIFIED"
CustomBiddingAlgorithmEntityStatusEnumEntityStatusActive CustomBiddingAlgorithmEntityStatusEnum = "ENTITY_STATUS_ACTIVE"
CustomBiddingAlgorithmEntityStatusEnumEntityStatusArchived CustomBiddingAlgorithmEntityStatusEnum = "ENTITY_STATUS_ARCHIVED"
CustomBiddingAlgorithmEntityStatusEnumEntityStatusDraft CustomBiddingAlgorithmEntityStatusEnum = "ENTITY_STATUS_DRAFT"
CustomBiddingAlgorithmEntityStatusEnumEntityStatusPaused CustomBiddingAlgorithmEntityStatusEnum = "ENTITY_STATUS_PAUSED"
CustomBiddingAlgorithmEntityStatusEnumEntityStatusScheduledForDeletion CustomBiddingAlgorithmEntityStatusEnum = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
)


type CustomBiddingAlgorithm struct {
    AdvertiserID *string `json:"advertiserId,omitempty"`
    CustomBiddingAlgorithmID *string `json:"customBiddingAlgorithmId,omitempty"`
    CustomBiddingAlgorithmState *CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum `json:"customBiddingAlgorithmState,omitempty"`
    CustomBiddingAlgorithmType *CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum `json:"customBiddingAlgorithmType,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EntityStatus *CustomBiddingAlgorithmEntityStatusEnum `json:"entityStatus,omitempty"`
    ModelReadiness []CustomBiddingModelReadinessState `json:"modelReadiness,omitempty"`
    Name *string `json:"name,omitempty"`
    PartnerID *string `json:"partnerId,omitempty"`
    SharedAdvertiserIds []string `json:"sharedAdvertiserIds,omitempty"`
    
}

