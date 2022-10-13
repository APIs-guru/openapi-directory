package shared

type VulnerableHeaders struct {
	Headers        []Header `json:"headers"`
	MissingHeaders []Header `json:"missingHeaders"`
}
