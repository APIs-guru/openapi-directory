package shared

type DatabasesListResponse struct {
	Items []Database `json:"items"`
	Kind  *string    `json:"kind"`
}
