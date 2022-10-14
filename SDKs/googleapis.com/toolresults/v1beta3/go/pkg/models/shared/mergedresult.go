package shared

type MergedResultStateEnum string

const (
	MergedResultStateEnumUnknownState MergedResultStateEnum = "unknownState"
	MergedResultStateEnumPending      MergedResultStateEnum = "pending"
	MergedResultStateEnumInProgress   MergedResultStateEnum = "inProgress"
	MergedResultStateEnumComplete     MergedResultStateEnum = "complete"
)

type MergedResult struct {
	Outcome            *Outcome               `json:"outcome,omitempty"`
	State              *MergedResultStateEnum `json:"state,omitempty"`
	TestSuiteOverviews []TestSuiteOverview    `json:"testSuiteOverviews,omitempty"`
}
