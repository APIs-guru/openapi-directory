package shared

type KeysMetadataRepresentation struct {
	Active map[string]interface{}                                `json:"active"`
	Keys   []KeysMetadataRepresentationKeyMetadataRepresentation `json:"keys"`
}
