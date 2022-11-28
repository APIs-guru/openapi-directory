package shared

// ListHistoriesResponse
// Response message for HistoryService.List
type ListHistoriesResponse struct {
	Histories     []History `json:"histories,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
