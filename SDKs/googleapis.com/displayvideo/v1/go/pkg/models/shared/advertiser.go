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

type Advertiser struct {
	AdServerConfig     *AdvertiserAdServerConfig   `json:"adServerConfig"`
	AdvertiserID       *string                     `json:"advertiserId"`
	CreativeConfig     *AdvertiserCreativeConfig   `json:"creativeConfig"`
	DataAccessConfig   *AdvertiserDataAccessConfig `json:"dataAccessConfig"`
	DisplayName        *string                     `json:"displayName"`
	EntityStatus       *AdvertiserEntityStatusEnum `json:"entityStatus"`
	GeneralConfig      *AdvertiserGeneralConfig    `json:"generalConfig"`
	IntegrationDetails *IntegrationDetails         `json:"integrationDetails"`
	Name               *string                     `json:"name"`
	PartnerID          *string                     `json:"partnerId"`
	PrismaEnabled      *bool                       `json:"prismaEnabled"`
	ServingConfig      *AdvertiserTargetingConfig  `json:"servingConfig"`
	UpdateTime         *string                     `json:"updateTime"`
}
