package shared

type PlaylistsResponse struct {
	HasNext            *bool                        `json:"has_next,omitempty"`
	HasPrevious        *bool                        `json:"has_previous,omitempty"`
	NextPageNumber     *int64                       `json:"next_page_number,omitempty"`
	PageNumber         *int64                       `json:"page_number,omitempty"`
	Playlists          []PlaylistsResponsePlaylists `json:"playlists,omitempty"`
	PreviousPageNumber *int64                       `json:"previous_page_number,omitempty"`
	Total              *int64                       `json:"total,omitempty"`
}
