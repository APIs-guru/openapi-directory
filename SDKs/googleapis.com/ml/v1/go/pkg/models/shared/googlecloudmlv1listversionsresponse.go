package shared

type GoogleCloudMlV1ListVersionsResponse struct {
	NextPageToken *string                  `json:"nextPageToken"`
	Versions      []GoogleCloudMlV1Version `json:"versions"`
}
