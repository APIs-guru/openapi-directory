package shared

type AdvertiserEntityStatusEnum string

const (
	AdvertiserEntityStatusEnumEntityStatusUnspecified          AdvertiserEntityStatusEnum = "ENTITY_STATUS_UNSPECIFIED"
	AdvertiserEntityStatusEnumEntityStatusActive               AdvertiserEntityStatusEnum = "ENTITY_STATUS_ACTIVE"
	AdvertiserEntityStatusEnumEntityStatusArchived             AdvertiserEntityStatusEnum = "ENTITY_STATUS_ARCHIVED"
	AdvertiserEntityStatusEnumEntityStatusDraft                AdvertiserEntityStatusEnum = "ENTITY_STATUS_DRAFT"
	AdvertiserEntityStatusEnumEntityStatusPaused               AdvertiserEntityStatusEnum = "ENTITY_STATUS_PAUSED"
	AdvertiserEntityStatusEnumEntityStatusScheduledForDeletion AdvertiserEntityStatusEnum = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
)

// Advertiser
// A single advertiser in Display & Video 360 (DV360).
type Advertiser struct {
	AdServerConfig     *AdvertiserAdServerConfig   `json:"adServerConfig,omitempty"`
	AdvertiserID       *string                     `json:"advertiserId,omitempty"`
	BillingConfig      *AdvertiserBillingConfig    `json:"billingConfig,omitempty"`
	CreativeConfig     *AdvertiserCreativeConfig   `json:"creativeConfig,omitempty"`
	DataAccessConfig   *AdvertiserDataAccessConfig `json:"dataAccessConfig,omitempty"`
	DisplayName        *string                     `json:"displayName,omitempty"`
	EntityStatus       *AdvertiserEntityStatusEnum `json:"entityStatus,omitempty"`
	GeneralConfig      *AdvertiserGeneralConfig    `json:"generalConfig,omitempty"`
	IntegrationDetails *IntegrationDetails         `json:"integrationDetails,omitempty"`
	Name               *string                     `json:"name,omitempty"`
	PartnerID          *string                     `json:"partnerId,omitempty"`
	PrismaEnabled      *bool                       `json:"prismaEnabled,omitempty"`
	ServingConfig      *AdvertiserTargetingConfig  `json:"servingConfig,omitempty"`
	UpdateTime         *string                     `json:"updateTime,omitempty"`
}

// AdvertiserInput
// A single advertiser in Display & Video 360 (DV360).
type AdvertiserInput struct {
	AdServerConfig     *AdvertiserAdServerConfig     `json:"adServerConfig,omitempty"`
	BillingConfig      *AdvertiserBillingConfig      `json:"billingConfig,omitempty"`
	CreativeConfig     *AdvertiserCreativeConfig     `json:"creativeConfig,omitempty"`
	DataAccessConfig   *AdvertiserDataAccessConfig   `json:"dataAccessConfig,omitempty"`
	DisplayName        *string                       `json:"displayName,omitempty"`
	EntityStatus       *AdvertiserEntityStatusEnum   `json:"entityStatus,omitempty"`
	GeneralConfig      *AdvertiserGeneralConfigInput `json:"generalConfig,omitempty"`
	IntegrationDetails *IntegrationDetails           `json:"integrationDetails,omitempty"`
	PartnerID          *string                       `json:"partnerId,omitempty"`
	PrismaEnabled      *bool                         `json:"prismaEnabled,omitempty"`
	ServingConfig      *AdvertiserTargetingConfig    `json:"servingConfig,omitempty"`
}
