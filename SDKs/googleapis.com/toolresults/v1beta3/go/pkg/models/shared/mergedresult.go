package shared

type MergedResultStateEnum string

const (
	MergedResultStateEnumUnknownState MergedResultStateEnum = "unknownState"
	MergedResultStateEnumPending      MergedResultStateEnum = "pending"
	MergedResultStateEnumInProgress   MergedResultStateEnum = "inProgress"
	MergedResultStateEnumComplete     MergedResultStateEnum = "complete"
)

// MergedResult
// Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
type MergedResult struct {
	Outcome            *Outcome               `json:"outcome,omitempty"`
	State              *MergedResultStateEnum `json:"state,omitempty"`
	TestSuiteOverviews []TestSuiteOverview    `json:"testSuiteOverviews,omitempty"`
}
