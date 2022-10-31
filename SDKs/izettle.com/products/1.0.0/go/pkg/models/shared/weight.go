package shared

type WeightUnitEnum string

const (
	WeightUnitEnumKg WeightUnitEnum = "kg"
	WeightUnitEnumG  WeightUnitEnum = "g"
	WeightUnitEnumOz WeightUnitEnum = "oz"
	WeightUnitEnumLb WeightUnitEnum = "lb"
)

type Weight struct {
	Unit   WeightUnitEnum `json:"unit"`
	Weight float64        `json:"weight"`
}
