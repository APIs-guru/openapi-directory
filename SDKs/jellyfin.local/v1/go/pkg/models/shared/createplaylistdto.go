package shared

type CreatePlaylistDto struct {
	Ids       []string `json:"Ids"`
	MediaType *string  `json:"MediaType"`
	Name      *string  `json:"Name"`
	UserID    *string  `json:"UserId"`
}
