package shared

// HmacKeysMetadata
// A list of hmacKeys.
type HmacKeysMetadata struct {
	Items         []HmacKeyMetadata `json:"items,omitempty"`
	Kind          *string           `json:"kind,omitempty"`
	NextPageToken *string           `json:"nextPageToken,omitempty"`
}
