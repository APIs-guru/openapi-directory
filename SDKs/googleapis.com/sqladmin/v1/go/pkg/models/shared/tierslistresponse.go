package shared

type TiersListResponse struct {
	Items []Tier  `json:"items"`
	Kind  *string `json:"kind"`
}
