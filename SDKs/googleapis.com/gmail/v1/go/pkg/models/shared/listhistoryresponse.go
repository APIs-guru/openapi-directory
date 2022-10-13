package shared

type ListHistoryResponse struct {
	History       []History `json:"history"`
	HistoryID     *string   `json:"historyId"`
	NextPageToken *string   `json:"nextPageToken"`
}
