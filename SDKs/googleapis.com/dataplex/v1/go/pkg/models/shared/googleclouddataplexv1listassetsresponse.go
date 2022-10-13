package shared

type GoogleCloudDataplexV1ListAssetsResponse struct {
	Assets        []GoogleCloudDataplexV1Asset `json:"assets"`
	NextPageToken *string                      `json:"nextPageToken"`
}
