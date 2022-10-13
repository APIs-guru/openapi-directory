package shared

type PartnerEntityStatusEnum string

const (
	PartnerEntityStatusEnumEntityStatusUnspecified          PartnerEntityStatusEnum = "ENTITY_STATUS_UNSPECIFIED"
	PartnerEntityStatusEnumEntityStatusActive               PartnerEntityStatusEnum = "ENTITY_STATUS_ACTIVE"
	PartnerEntityStatusEnumEntityStatusArchived             PartnerEntityStatusEnum = "ENTITY_STATUS_ARCHIVED"
	PartnerEntityStatusEnumEntityStatusDraft                PartnerEntityStatusEnum = "ENTITY_STATUS_DRAFT"
	PartnerEntityStatusEnumEntityStatusPaused               PartnerEntityStatusEnum = "ENTITY_STATUS_PAUSED"
	PartnerEntityStatusEnumEntityStatusScheduledForDeletion PartnerEntityStatusEnum = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
)

type Partner struct {
	AdServerConfig   *PartnerAdServerConfig   `json:"adServerConfig"`
	DataAccessConfig *PartnerDataAccessConfig `json:"dataAccessConfig"`
	DisplayName      *string                  `json:"displayName"`
	EntityStatus     *PartnerEntityStatusEnum `json:"entityStatus"`
	ExchangeConfig   *ExchangeConfig          `json:"exchangeConfig"`
	GeneralConfig    *PartnerGeneralConfig    `json:"generalConfig"`
	Name             *string                  `json:"name"`
	PartnerID        *string                  `json:"partnerId"`
	UpdateTime       *string                  `json:"updateTime"`
}
