package shared

// GoogleCloudDataplexV1ListAssetsResponse
// List assets response.
type GoogleCloudDataplexV1ListAssetsResponse struct {
	Assets        []GoogleCloudDataplexV1Asset `json:"assets,omitempty"`
	NextPageToken *string                      `json:"nextPageToken,omitempty"`
}
