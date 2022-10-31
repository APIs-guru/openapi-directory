package shared



type Address struct {
    BuildingNumber *string `json:"buildingNumber,omitempty"`
    Country string `json:"country"`
    PostCode *string `json:"postCode,omitempty"`
    StreetName *string `json:"streetName,omitempty"`
    TownName *string `json:"townName,omitempty"`
    
}

