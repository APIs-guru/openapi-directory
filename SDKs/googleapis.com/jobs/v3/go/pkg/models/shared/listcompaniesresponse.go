package shared

type ListCompaniesResponse struct {
	Companies     []Company         `json:"companies"`
	Metadata      *ResponseMetadata `json:"metadata"`
	NextPageToken *string           `json:"nextPageToken"`
}
