package shared

type AvailablePrefix struct {
	Family *int64     `json:"family"`
	Prefix *string    `json:"prefix"`
	Vrf    *NestedVrf `json:"vrf"`
}
