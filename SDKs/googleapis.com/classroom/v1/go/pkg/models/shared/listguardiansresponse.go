package shared

// ListGuardiansResponse
// Response when listing guardians.
type ListGuardiansResponse struct {
	Guardians     []Guardian `json:"guardians,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
