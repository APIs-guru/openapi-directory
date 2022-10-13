package shared

type GoogleCloudRetailV2alphaListControlsResponse struct {
	Controls      []GoogleCloudRetailV2alphaControl `json:"controls"`
	NextPageToken *string                           `json:"nextPageToken"`
}
