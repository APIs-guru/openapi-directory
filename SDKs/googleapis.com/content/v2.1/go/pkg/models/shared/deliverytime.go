package shared

type DeliveryTime struct {
	CutoffTime                  *CutoffTime                  `json:"cutoffTime"`
	HandlingBusinessDayConfig   *BusinessDayConfig           `json:"handlingBusinessDayConfig"`
	HolidayCutoffs              []HolidayCutoff              `json:"holidayCutoffs"`
	MaxHandlingTimeInDays       *int64                       `json:"maxHandlingTimeInDays"`
	MaxTransitTimeInDays        *int64                       `json:"maxTransitTimeInDays"`
	MinHandlingTimeInDays       *int64                       `json:"minHandlingTimeInDays"`
	MinTransitTimeInDays        *int64                       `json:"minTransitTimeInDays"`
	TransitBusinessDayConfig    *BusinessDayConfig           `json:"transitBusinessDayConfig"`
	TransitTimeTable            *TransitTable                `json:"transitTimeTable"`
	WarehouseBasedDeliveryTimes []WarehouseBasedDeliveryTime `json:"warehouseBasedDeliveryTimes"`
}
