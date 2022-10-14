package shared

type Warehouse struct {
	BusinessDayConfig *BusinessDayConfig   `json:"businessDayConfig,omitempty"`
	CutoffTime        *WarehouseCutoffTime `json:"cutoffTime,omitempty"`
	HandlingDays      *string              `json:"handlingDays,omitempty"`
	Name              *string              `json:"name,omitempty"`
	ShippingAddress   *Address             `json:"shippingAddress,omitempty"`
}
