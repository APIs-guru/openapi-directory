package shared

// DimensionValueList
// Represents the list of DimensionValue resources.
type DimensionValueList struct {
	Etag          *string          `json:"etag,omitempty"`
	Items         []DimensionValue `json:"items,omitempty"`
	Kind          *string          `json:"kind,omitempty"`
	NextPageToken *string          `json:"nextPageToken,omitempty"`
}
