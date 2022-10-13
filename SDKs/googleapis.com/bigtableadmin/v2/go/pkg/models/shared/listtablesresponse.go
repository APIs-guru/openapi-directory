package shared

type ListTablesResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Tables        []Table `json:"tables"`
}
