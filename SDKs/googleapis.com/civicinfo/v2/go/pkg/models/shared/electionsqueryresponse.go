package shared

type ElectionsQueryResponse struct {
	Elections []Election `json:"elections"`
	Kind      *string    `json:"kind"`
}
