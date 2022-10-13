package shared

type ReserveIdsRequest struct {
	DatabaseID *string `json:"databaseId"`
	Keys       []Key   `json:"keys"`
}
