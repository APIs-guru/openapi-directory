package shared

type BuildProvenance struct {
	BuildOptions     map[string]string `json:"buildOptions"`
	BuilderVersion   *string           `json:"builderVersion"`
	BuiltArtifacts   []Artifact        `json:"builtArtifacts"`
	Commands         []Command         `json:"commands"`
	CreateTime       *string           `json:"createTime"`
	Creator          *string           `json:"creator"`
	EndTime          *string           `json:"endTime"`
	ID               *string           `json:"id"`
	LogsURI          *string           `json:"logsUri"`
	ProjectID        *string           `json:"projectId"`
	SourceProvenance *Source           `json:"sourceProvenance"`
	StartTime        *string           `json:"startTime"`
	TriggerID        *string           `json:"triggerId"`
}
