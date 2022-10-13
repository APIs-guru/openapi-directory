package shared

type AvailableIP struct {
	Address *string    `json:"address"`
	Family  *int64     `json:"family"`
	Vrf     *NestedVrf `json:"vrf"`
}
