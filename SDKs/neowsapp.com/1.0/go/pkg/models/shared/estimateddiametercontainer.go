package shared

type EstimatedDiameterContainer struct {
	Feet       *EstimatedDiameter `json:"feet"`
	Kilometers *EstimatedDiameter `json:"kilometers"`
	Meters     *EstimatedDiameter `json:"meters"`
	Miles      *EstimatedDiameter `json:"miles"`
}
