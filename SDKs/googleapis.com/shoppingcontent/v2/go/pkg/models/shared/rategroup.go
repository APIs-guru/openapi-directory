package shared

type RateGroup struct {
	ApplicableShippingLabels []string      `json:"applicableShippingLabels"`
	CarrierRates             []CarrierRate `json:"carrierRates"`
	MainTable                *Table        `json:"mainTable"`
	Name                     *string       `json:"name"`
	SingleValue              *Value        `json:"singleValue"`
	Subtables                []Table       `json:"subtables"`
}
