package shared



type GuestUnitType struct {
    Codes []string `json:"codes,omitempty"`
    Features *GuestUnitFeatures `json:"features,omitempty"`
    Label *string `json:"label,omitempty"`
    
}

