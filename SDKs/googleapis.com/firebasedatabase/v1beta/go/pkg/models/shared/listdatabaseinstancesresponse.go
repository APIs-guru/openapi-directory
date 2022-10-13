package shared

type ListDatabaseInstancesResponse struct {
	Instances     []DatabaseInstance `json:"instances"`
	NextPageToken *string            `json:"nextPageToken"`
}
