package shared

type ListKeyRingsResponse struct {
	KeyRings      []KeyRing `json:"keyRings"`
	NextPageToken *string   `json:"nextPageToken"`
	TotalSize     *int32    `json:"totalSize"`
}
