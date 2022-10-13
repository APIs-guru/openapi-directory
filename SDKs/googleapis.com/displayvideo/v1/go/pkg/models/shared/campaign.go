package shared

type CampaignEntityStatusEnum string

const (
	CampaignEntityStatusEnumEntityStatusUnspecified          CampaignEntityStatusEnum = "ENTITY_STATUS_UNSPECIFIED"
	CampaignEntityStatusEnumEntityStatusActive               CampaignEntityStatusEnum = "ENTITY_STATUS_ACTIVE"
	CampaignEntityStatusEnumEntityStatusArchived             CampaignEntityStatusEnum = "ENTITY_STATUS_ARCHIVED"
	CampaignEntityStatusEnumEntityStatusDraft                CampaignEntityStatusEnum = "ENTITY_STATUS_DRAFT"
	CampaignEntityStatusEnumEntityStatusPaused               CampaignEntityStatusEnum = "ENTITY_STATUS_PAUSED"
	CampaignEntityStatusEnumEntityStatusScheduledForDeletion CampaignEntityStatusEnum = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
)

type Campaign struct {
	AdvertiserID    *string                   `json:"advertiserId"`
	CampaignBudgets []CampaignBudget          `json:"campaignBudgets"`
	CampaignFlight  *CampaignFlight           `json:"campaignFlight"`
	CampaignGoal    *CampaignGoal             `json:"campaignGoal"`
	CampaignID      *string                   `json:"campaignId"`
	DisplayName     *string                   `json:"displayName"`
	EntityStatus    *CampaignEntityStatusEnum `json:"entityStatus"`
	FrequencyCap    *FrequencyCap             `json:"frequencyCap"`
	Name            *string                   `json:"name"`
	UpdateTime      *string                   `json:"updateTime"`
}
