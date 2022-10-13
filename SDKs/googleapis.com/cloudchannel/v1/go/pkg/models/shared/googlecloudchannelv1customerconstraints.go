package shared

type GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum string

const (
	GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnumCustomerTypeUnspecified GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum = "CUSTOMER_TYPE_UNSPECIFIED"
	GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnumDomain                  GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum = "DOMAIN"
	GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnumTeam                    GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum = "TEAM"
)

type GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum string

const (
	GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnumPromotionalTypeUnspecified GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum = "PROMOTIONAL_TYPE_UNSPECIFIED"
	GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnumNewUpgrade                 GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum = "NEW_UPGRADE"
	GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnumTransfer                   GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum = "TRANSFER"
	GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnumPromotionSwitch            GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum = "PROMOTION_SWITCH"
)

type GoogleCloudChannelV1CustomerConstraints struct {
	AllowedCustomerTypes  []GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum  `json:"allowedCustomerTypes"`
	AllowedRegions        []string                                                           `json:"allowedRegions"`
	PromotionalOrderTypes []GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum `json:"promotionalOrderTypes"`
}
