package shared

type GoogleCloudRetailV2ListControlsResponse struct {
	Controls      []GoogleCloudRetailV2Control `json:"controls"`
	NextPageToken *string                      `json:"nextPageToken"`
}
