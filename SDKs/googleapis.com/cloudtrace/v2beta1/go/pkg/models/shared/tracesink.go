package shared

type TraceSink struct {
	Name           *string       `json:"name"`
	OutputConfig   *OutputConfig `json:"outputConfig"`
	WriterIdentity *string       `json:"writerIdentity"`
}
