package shared



type Playlist struct {
    ContentDetails *PlaylistContentDetails `json:"contentDetails,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Localizations map[string]PlaylistLocalization `json:"localizations,omitempty"`
    Player *PlaylistPlayer `json:"player,omitempty"`
    Snippet *PlaylistSnippet `json:"snippet,omitempty"`
    Status *PlaylistStatus `json:"status,omitempty"`
    
}

