package shared

type Seats struct {
	Kind                  *string `json:"kind"`
	LicensedNumberOfSeats *int32  `json:"licensedNumberOfSeats"`
	MaximumNumberOfSeats  *int32  `json:"maximumNumberOfSeats"`
	NumberOfSeats         *int32  `json:"numberOfSeats"`
}
