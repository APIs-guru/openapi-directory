package shared

type ConferenceSolution struct {
	IconURI *string                `json:"iconUri"`
	Key     *ConferenceSolutionKey `json:"key"`
	Name    *string                `json:"name"`
}
