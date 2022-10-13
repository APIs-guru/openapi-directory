package shared

type ListAcceleratorTypesResponse struct {
	AcceleratorTypes []AcceleratorType `json:"acceleratorTypes"`
	NextPageToken    *string           `json:"nextPageToken"`
	Unreachable      []string          `json:"unreachable"`
}
