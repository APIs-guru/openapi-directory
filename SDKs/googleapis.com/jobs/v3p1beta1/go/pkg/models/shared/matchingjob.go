package shared

type MatchingJob struct {
	CommuteInfo       *CommuteInfo `json:"commuteInfo"`
	Job               *Job         `json:"job"`
	JobSummary        *string      `json:"jobSummary"`
	JobTitleSnippet   *string      `json:"jobTitleSnippet"`
	SearchTextSnippet *string      `json:"searchTextSnippet"`
}
