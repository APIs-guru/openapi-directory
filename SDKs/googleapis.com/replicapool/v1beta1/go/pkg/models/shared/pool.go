package shared

type Pool struct {
	AutoRestart        *bool         `json:"autoRestart"`
	BaseInstanceName   *string       `json:"baseInstanceName"`
	CurrentNumReplicas *int32        `json:"currentNumReplicas"`
	Description        *string       `json:"description"`
	HealthChecks       []HealthCheck `json:"healthChecks"`
	InitialNumReplicas *int32        `json:"initialNumReplicas"`
	Labels             []Label       `json:"labels"`
	Name               *string       `json:"name"`
	NumReplicas        *int32        `json:"numReplicas"`
	ResourceViews      []string      `json:"resourceViews"`
	SelfLink           *string       `json:"selfLink"`
	TargetPool         *string       `json:"targetPool"`
	TargetPools        []string      `json:"targetPools"`
	Template           *Template     `json:"template"`
	Type               *string       `json:"type"`
}
