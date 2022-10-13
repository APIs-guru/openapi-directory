package shared

type MergedResultStateEnum string

const (
	MergedResultStateEnumUnknownState MergedResultStateEnum = "unknownState"
	MergedResultStateEnumPending      MergedResultStateEnum = "pending"
	MergedResultStateEnumInProgress   MergedResultStateEnum = "inProgress"
	MergedResultStateEnumComplete     MergedResultStateEnum = "complete"
)

type MergedResult struct {
	Outcome            *Outcome               `json:"outcome"`
	State              *MergedResultStateEnum `json:"state"`
	TestSuiteOverviews []TestSuiteOverview    `json:"testSuiteOverviews"`
}
