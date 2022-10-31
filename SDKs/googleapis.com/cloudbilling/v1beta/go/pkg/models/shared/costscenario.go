package shared

type CostScenario struct {
	Commitments    []Commitment    `json:"commitments,omitempty"`
	ScenarioConfig *ScenarioConfig `json:"scenarioConfig,omitempty"`
	Workloads      []Workload      `json:"workloads,omitempty"`
}
