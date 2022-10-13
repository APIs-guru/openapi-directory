package shared

type QueryjobResultsOverview struct {
	Data []QueryjobResultsOverviewEntry `json:"data"`
	Next *string                        `json:"next"`
}
