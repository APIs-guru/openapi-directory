package shared

type BestPodcastsResponse struct {
	HasNext            bool            `json:"has_next"`
	HasPrevious        bool            `json:"has_previous"`
	ID                 int64           `json:"id"`
	ListennotesURL     string          `json:"listennotes_url"`
	Name               string          `json:"name"`
	NextPageNumber     int64           `json:"next_page_number"`
	PageNumber         int64           `json:"page_number"`
	ParentID           int64           `json:"parent_id"`
	Podcasts           []PodcastSimple `json:"podcasts"`
	PreviousPageNumber int64           `json:"previous_page_number"`
	Total              int64           `json:"total"`
}
