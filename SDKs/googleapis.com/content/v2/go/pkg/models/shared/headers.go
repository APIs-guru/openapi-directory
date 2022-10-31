package shared



type Headers struct {
    Locations []LocationIDSet `json:"locations,omitempty"`
    NumberOfItems []string `json:"numberOfItems,omitempty"`
    PostalCodeGroupNames []string `json:"postalCodeGroupNames,omitempty"`
    Prices []Price `json:"prices,omitempty"`
    Weights []Weight `json:"weights,omitempty"`
    
}

