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

// CampaignInput
// A single campaign.
type CampaignInput struct {
	CampaignBudgets []CampaignBudget          `json:"campaignBudgets,omitempty"`
	CampaignFlight  *CampaignFlight           `json:"campaignFlight,omitempty"`
	CampaignGoal    *CampaignGoal             `json:"campaignGoal,omitempty"`
	DisplayName     *string                   `json:"displayName,omitempty"`
	EntityStatus    *CampaignEntityStatusEnum `json:"entityStatus,omitempty"`
	FrequencyCap    *FrequencyCap             `json:"frequencyCap,omitempty"`
}

// Campaign
// A single campaign.
type Campaign struct {
	AdvertiserID    *string                   `json:"advertiserId,omitempty"`
	CampaignBudgets []CampaignBudget          `json:"campaignBudgets,omitempty"`
	CampaignFlight  *CampaignFlight           `json:"campaignFlight,omitempty"`
	CampaignGoal    *CampaignGoal             `json:"campaignGoal,omitempty"`
	CampaignID      *string                   `json:"campaignId,omitempty"`
	DisplayName     *string                   `json:"displayName,omitempty"`
	EntityStatus    *CampaignEntityStatusEnum `json:"entityStatus,omitempty"`
	FrequencyCap    *FrequencyCap             `json:"frequencyCap,omitempty"`
	Name            *string                   `json:"name,omitempty"`
	UpdateTime      *string                   `json:"updateTime,omitempty"`
}
