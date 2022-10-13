package shared

type AllocateIdsRequest struct {
	DatabaseID *string `json:"databaseId"`
	Keys       []Key   `json:"keys"`
}
