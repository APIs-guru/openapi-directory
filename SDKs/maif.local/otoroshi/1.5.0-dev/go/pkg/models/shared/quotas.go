package shared

// Quotas
// Quotas state for an api key on a service group
type Quotas struct {
	AuthorizedCallsPerDay   int64 `json:"authorizedCallsPerDay"`
	AuthorizedCallsPerMonth int64 `json:"authorizedCallsPerMonth"`
	AuthorizedCallsPerSec   int64 `json:"authorizedCallsPerSec"`
	CurrentCallsPerDay      int64 `json:"currentCallsPerDay"`
	CurrentCallsPerMonth    int64 `json:"currentCallsPerMonth"`
	CurrentCallsPerSec      int64 `json:"currentCallsPerSec"`
	RemainingCallsPerDay    int64 `json:"remainingCallsPerDay"`
	RemainingCallsPerMonth  int64 `json:"remainingCallsPerMonth"`
	RemainingCallsPerSec    int64 `json:"remainingCallsPerSec"`
}
