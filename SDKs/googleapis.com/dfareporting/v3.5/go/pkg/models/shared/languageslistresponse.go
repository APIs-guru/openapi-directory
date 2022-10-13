package shared

type LanguagesListResponse struct {
	Kind      *string    `json:"kind"`
	Languages []Language `json:"languages"`
}
