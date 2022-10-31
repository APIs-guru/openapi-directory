package shared



type TraceSink struct {
    Name *string `json:"name,omitempty"`
    OutputConfig *OutputConfig `json:"outputConfig,omitempty"`
    WriterIdentity *string `json:"writerIdentity,omitempty"`
    
}

