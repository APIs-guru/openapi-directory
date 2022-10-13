package shared

type GoogleCloudRetailV2betaListControlsResponse struct {
	Controls      []GoogleCloudRetailV2betaControl `json:"controls"`
	NextPageToken *string                          `json:"nextPageToken"`
}
