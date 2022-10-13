package shared

type Warehouse struct {
	BusinessDayConfig *BusinessDayConfig   `json:"businessDayConfig"`
	CutoffTime        *WarehouseCutoffTime `json:"cutoffTime"`
	HandlingDays      *string              `json:"handlingDays"`
	Name              *string              `json:"name"`
	ShippingAddress   *Address             `json:"shippingAddress"`
}
