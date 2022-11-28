package shared

// TraceSink
// Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
type TraceSink struct {
	Name           *string       `json:"name,omitempty"`
	OutputConfig   *OutputConfig `json:"outputConfig,omitempty"`
	WriterIdentity *string       `json:"writerIdentity,omitempty"`
}

// TraceSinkInput
// Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
type TraceSinkInput struct {
	Name         *string       `json:"name,omitempty"`
	OutputConfig *OutputConfig `json:"outputConfig,omitempty"`
}
