package shared

type CarrierRate struct {
	CarrierName          *string `json:"carrierName,omitempty"`
	CarrierService       *string `json:"carrierService,omitempty"`
	FlatAdjustment       *Price  `json:"flatAdjustment,omitempty"`
	Name                 *string `json:"name,omitempty"`
	OriginPostalCode     *string `json:"originPostalCode,omitempty"`
	PercentageAdjustment *string `json:"percentageAdjustment,omitempty"`
}
