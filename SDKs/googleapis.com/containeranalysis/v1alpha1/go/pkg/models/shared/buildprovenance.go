package shared

type BuildProvenance struct {
	BuildOptions     map[string]string `json:"buildOptions"`
	BuilderVersion   *string           `json:"builderVersion"`
	BuiltArtifacts   []Artifact        `json:"builtArtifacts"`
	Commands         []Command         `json:"commands"`
	CreateTime       *string           `json:"createTime"`
	Creator          *string           `json:"creator"`
	FinishTime       *string           `json:"finishTime"`
	ID               *string           `json:"id"`
	LogsBucket       *string           `json:"logsBucket"`
	ProjectID        *string           `json:"projectId"`
	SourceProvenance *Source           `json:"sourceProvenance"`
	StartTime        *string           `json:"startTime"`
	TriggerID        *string           `json:"triggerId"`
}
