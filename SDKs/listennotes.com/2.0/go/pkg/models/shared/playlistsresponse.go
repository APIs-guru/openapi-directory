package shared

type PlaylistsResponse struct {
	HasNext            *bool                        `json:"has_next"`
	HasPrevious        *bool                        `json:"has_previous"`
	NextPageNumber     *int64                       `json:"next_page_number"`
	PageNumber         *int64                       `json:"page_number"`
	Playlists          []PlaylistsResponsePlaylists `json:"playlists"`
	PreviousPageNumber *int64                       `json:"previous_page_number"`
	Total              *int64                       `json:"total"`
}
