package shared

type ListKeyRingsResponse struct {
	KeyRings      []KeyRing `json:"keyRings,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	TotalSize     *int32    `json:"totalSize,omitempty"`
}
