package shared

type ListStepsResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Steps         []Step  `json:"steps"`
}
