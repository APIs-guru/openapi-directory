package shared

type HmacKeysMetadata struct {
	Items         []HmacKeyMetadata `json:"items"`
	Kind          *string           `json:"kind"`
	NextPageToken *string           `json:"nextPageToken"`
}
