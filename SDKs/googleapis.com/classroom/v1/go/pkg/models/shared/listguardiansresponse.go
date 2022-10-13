package shared

type ListGuardiansResponse struct {
	Guardians     []Guardian `json:"guardians"`
	NextPageToken *string    `json:"nextPageToken"`
}
