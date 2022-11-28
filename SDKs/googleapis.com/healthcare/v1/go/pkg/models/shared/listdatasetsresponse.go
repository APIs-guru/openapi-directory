package shared

// ListDatasetsResponse
// Lists the available datasets.
type ListDatasetsResponse struct {
	Datasets      []Dataset `json:"datasets,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
