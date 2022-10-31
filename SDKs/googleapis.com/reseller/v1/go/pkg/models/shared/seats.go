package shared



type Seats struct {
    Kind *string `json:"kind,omitempty"`
    LicensedNumberOfSeats *int32 `json:"licensedNumberOfSeats,omitempty"`
    MaximumNumberOfSeats *int32 `json:"maximumNumberOfSeats,omitempty"`
    NumberOfSeats *int32 `json:"numberOfSeats,omitempty"`
    
}

