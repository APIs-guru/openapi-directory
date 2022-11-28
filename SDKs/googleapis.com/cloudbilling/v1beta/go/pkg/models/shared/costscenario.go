package shared

// CostScenario
// Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options.
type CostScenario struct {
	Commitments    []Commitment    `json:"commitments,omitempty"`
	ScenarioConfig *ScenarioConfig `json:"scenarioConfig,omitempty"`
	Workloads      []Workload      `json:"workloads,omitempty"`
}
