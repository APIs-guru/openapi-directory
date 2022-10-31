package shared

type ConferenceSolution struct {
	IconURI *string                `json:"iconUri,omitempty"`
	Key     *ConferenceSolutionKey `json:"key,omitempty"`
	Name    *string                `json:"name,omitempty"`
}
