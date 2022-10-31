package shared



type RateGroup struct {
    ApplicableShippingLabels []string `json:"applicableShippingLabels,omitempty"`
    CarrierRates []CarrierRate `json:"carrierRates,omitempty"`
    MainTable *Table `json:"mainTable,omitempty"`
    Name *string `json:"name,omitempty"`
    SingleValue *Value `json:"singleValue,omitempty"`
    Subtables []Table `json:"subtables,omitempty"`
    
}

