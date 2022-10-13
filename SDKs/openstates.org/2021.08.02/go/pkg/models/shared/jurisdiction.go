package shared

type Jurisdiction struct {
	Classification      JurisdictionClassificationEnum `json:"classification"`
	DivisionID          *string                        `json:"division_id"`
	ID                  string                         `json:"id"`
	LatestRuns          []RunPlan                      `json:"latest_runs"`
	LegislativeSessions []LegislativeSession           `json:"legislative_sessions"`
	Name                string                         `json:"name"`
	Organizations       []Chamber                      `json:"organizations"`
	URL                 string                         `json:"url"`
}
