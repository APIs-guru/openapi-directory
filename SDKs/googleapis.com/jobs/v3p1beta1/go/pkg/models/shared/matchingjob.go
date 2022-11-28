package shared

// MatchingJob
// Output only. Job entry with metadata inside SearchJobsResponse.
type MatchingJob struct {
	CommuteInfo       *CommuteInfo `json:"commuteInfo,omitempty"`
	Job               *Job         `json:"job,omitempty"`
	JobSummary        *string      `json:"jobSummary,omitempty"`
	JobTitleSnippet   *string      `json:"jobTitleSnippet,omitempty"`
	SearchTextSnippet *string      `json:"searchTextSnippet,omitempty"`
}
