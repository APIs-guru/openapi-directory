package shared

// LogMatch
// A condition type that checks whether a log message in the scoping project (https://cloud.google.com/monitoring/api/v3#project_name) satisfies the given filter. Logs from other projects in the metrics scope are not evaluated.
type LogMatch struct {
	Filter          *string           `json:"filter,omitempty"`
	LabelExtractors map[string]string `json:"labelExtractors,omitempty"`
}
