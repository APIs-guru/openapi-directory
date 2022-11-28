package shared

// RunJobRequest
// Request message for forcing a job to run now using RunJob.
type RunJobRequest struct {
	LegacyAppEngineCron *bool `json:"legacyAppEngineCron,omitempty"`
}
