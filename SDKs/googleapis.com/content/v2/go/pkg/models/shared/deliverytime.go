package shared

type DeliveryTime struct {
	CutoffTime                  *CutoffTime                  `json:"cutoffTime,omitempty"`
	HandlingBusinessDayConfig   *BusinessDayConfig           `json:"handlingBusinessDayConfig,omitempty"`
	HolidayCutoffs              []HolidayCutoff              `json:"holidayCutoffs,omitempty"`
	MaxHandlingTimeInDays       *int64                       `json:"maxHandlingTimeInDays,omitempty"`
	MaxTransitTimeInDays        *int64                       `json:"maxTransitTimeInDays,omitempty"`
	MinHandlingTimeInDays       *int64                       `json:"minHandlingTimeInDays,omitempty"`
	MinTransitTimeInDays        *int64                       `json:"minTransitTimeInDays,omitempty"`
	TransitBusinessDayConfig    *BusinessDayConfig           `json:"transitBusinessDayConfig,omitempty"`
	TransitTimeTable            *TransitTable                `json:"transitTimeTable,omitempty"`
	WarehouseBasedDeliveryTimes []WarehouseBasedDeliveryTime `json:"warehouseBasedDeliveryTimes,omitempty"`
}
