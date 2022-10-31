package shared

type AvailableIP struct {
	Address *string    `json:"address,omitempty"`
	Family  *int64     `json:"family,omitempty"`
	Vrf     *NestedVrf `json:"vrf,omitempty"`
}
