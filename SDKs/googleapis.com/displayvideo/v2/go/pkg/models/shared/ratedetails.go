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
	InventorySourceRateType *RateDetailsInventorySourceRateTypeEnum `json:"inventorySourceRateType"`
	MinimumSpend            *Money                                  `json:"minimumSpend"`
	Rate                    *Money                                  `json:"rate"`
	UnitsPurchased          *string                                 `json:"unitsPurchased"`
}
