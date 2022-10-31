package shared



type EstimatedDiameterContainer struct {
    Feet *EstimatedDiameter `json:"feet,omitempty"`
    Kilometers *EstimatedDiameter `json:"kilometers,omitempty"`
    Meters *EstimatedDiameter `json:"meters,omitempty"`
    Miles *EstimatedDiameter `json:"miles,omitempty"`
    
}

