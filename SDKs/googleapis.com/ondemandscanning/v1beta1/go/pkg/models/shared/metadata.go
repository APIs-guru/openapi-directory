package shared

type Metadata struct {
	BuildFinishedOn   *string       `json:"buildFinishedOn"`
	BuildInvocationID *string       `json:"buildInvocationId"`
	BuildStartedOn    *string       `json:"buildStartedOn"`
	Completeness      *Completeness `json:"completeness"`
	Reproducible      *bool         `json:"reproducible"`
}
