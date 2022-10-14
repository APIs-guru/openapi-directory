package shared

type RateDetailsInventorySourceRateTypeEnum string

const (
	RateDetailsInventorySourceRateTypeEnumInventorySourceRateTypeUnspecified RateDetailsInventorySourceRateTypeEnum = "INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED"
	RateDetailsInventorySourceRateTypeEnumInventorySourceRateTypeCpmFixed    RateDetailsInventorySourceRateTypeEnum = "INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED"
	RateDetailsInventorySourceRateTypeEnumInventorySourceRateTypeCpmFloor    RateDetailsInventorySourceRateTypeEnum = "INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR"
	RateDetailsInventorySourceRateTypeEnumInventorySourceRateTypeCpd         RateDetailsInventorySourceRateTypeEnum = "INVENTORY_SOURCE_RATE_TYPE_CPD"
	RateDetailsInventorySourceRateTypeEnumInventorySourceRateTypeFlat        RateDetailsInventorySourceRateTypeEnum = "INVENTORY_SOURCE_RATE_TYPE_FLAT"
)

type RateDetails struct {
	InventorySourceRateType *RateDetailsInventorySourceRateTypeEnum `json:"inventorySourceRateType,omitempty"`
	MinimumSpend            *Money                                  `json:"minimumSpend,omitempty"`
	Rate                    *Money                                  `json:"rate,omitempty"`
	UnitsPurchased          *string                                 `json:"unitsPurchased,omitempty"`
}
