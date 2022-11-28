package shared

// BuildProvenance
// Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
type BuildProvenance struct {
	BuildOptions     map[string]string `json:"buildOptions,omitempty"`
	BuilderVersion   *string           `json:"builderVersion,omitempty"`
	BuiltArtifacts   []Artifact        `json:"builtArtifacts,omitempty"`
	Commands         []Command         `json:"commands,omitempty"`
	CreateTime       *string           `json:"createTime,omitempty"`
	Creator          *string           `json:"creator,omitempty"`
	EndTime          *string           `json:"endTime,omitempty"`
	ID               *string           `json:"id,omitempty"`
	LogsURI          *string           `json:"logsUri,omitempty"`
	ProjectID        *string           `json:"projectId,omitempty"`
	SourceProvenance *Source           `json:"sourceProvenance,omitempty"`
	StartTime        *string           `json:"startTime,omitempty"`
	TriggerID        *string           `json:"triggerId,omitempty"`
}
