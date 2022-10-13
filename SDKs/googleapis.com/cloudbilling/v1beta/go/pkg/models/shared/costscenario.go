package shared

type CostScenario struct {
	Commitments    []Commitment    `json:"commitments"`
	ScenarioConfig *ScenarioConfig `json:"scenarioConfig"`
	Workloads      []Workload      `json:"workloads"`
}
