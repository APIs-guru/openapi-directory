package shared

type CarrierRate struct {
	CarrierName          *string `json:"carrierName"`
	CarrierService       *string `json:"carrierService"`
	FlatAdjustment       *Price  `json:"flatAdjustment"`
	Name                 *string `json:"name"`
	OriginPostalCode     *string `json:"originPostalCode"`
	PercentageAdjustment *string `json:"percentageAdjustment"`
}
