package shared

type ClusterCustomerAddress struct {
	Lat        *float64 `json:"lat"`
	Lon        *float64 `json:"lon"`
	StreetHint *string  `json:"street_hint"`
}
