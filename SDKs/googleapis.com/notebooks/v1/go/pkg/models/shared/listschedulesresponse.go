package shared

type ListSchedulesResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	Schedules     []Schedule `json:"schedules"`
	Unreachable   []string   `json:"unreachable"`
}
