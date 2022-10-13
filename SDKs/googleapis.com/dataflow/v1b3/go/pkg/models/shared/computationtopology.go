package shared

type ComputationTopology struct {
	ComputationID   *string             `json:"computationId"`
	Inputs          []StreamLocation    `json:"inputs"`
	KeyRanges       []KeyRangeLocation  `json:"keyRanges"`
	Outputs         []StreamLocation    `json:"outputs"`
	StateFamilies   []StateFamilyConfig `json:"stateFamilies"`
	SystemStageName *string             `json:"systemStageName"`
}
