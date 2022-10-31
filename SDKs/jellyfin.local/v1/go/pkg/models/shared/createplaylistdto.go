package shared

type CreatePlaylistDto struct {
	Ids       []string `json:"Ids,omitempty"`
	MediaType *string  `json:"MediaType,omitempty"`
	Name      *string  `json:"Name,omitempty"`
	UserID    *string  `json:"UserId,omitempty"`
}
