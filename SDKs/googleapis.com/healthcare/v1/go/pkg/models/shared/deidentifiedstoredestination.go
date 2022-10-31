package shared



type DeidentifiedStoreDestination struct {
    Config *DeidentifyConfig `json:"config,omitempty"`
    Store *string `json:"store,omitempty"`
    
}

