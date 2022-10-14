package shared

type ListDatasetsResponse struct {
	Datasets      []Dataset `json:"datasets,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
