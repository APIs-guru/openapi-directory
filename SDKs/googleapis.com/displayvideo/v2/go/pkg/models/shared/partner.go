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
	AdServerConfig   *PartnerAdServerConfig   `json:"adServerConfig,omitempty"`
	DataAccessConfig *PartnerDataAccessConfig `json:"dataAccessConfig,omitempty"`
	DisplayName      *string                  `json:"displayName,omitempty"`
	EntityStatus     *PartnerEntityStatusEnum `json:"entityStatus,omitempty"`
	ExchangeConfig   *ExchangeConfig          `json:"exchangeConfig,omitempty"`
	GeneralConfig    *PartnerGeneralConfig    `json:"generalConfig,omitempty"`
	Name             *string                  `json:"name,omitempty"`
	PartnerID        *string                  `json:"partnerId,omitempty"`
	UpdateTime       *string                  `json:"updateTime,omitempty"`
}
