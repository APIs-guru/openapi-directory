package shared

// ListSchedulesResponse
// Response for listing scheduled notebook job.
type ListSchedulesResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Schedules     []Schedule `json:"schedules,omitempty"`
	Unreachable   []string   `json:"unreachable,omitempty"`
}
