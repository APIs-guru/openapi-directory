package shared

type ListLiensResponse struct {
	Liens         []Lien  `json:"liens"`
	NextPageToken *string `json:"nextPageToken"`
}
