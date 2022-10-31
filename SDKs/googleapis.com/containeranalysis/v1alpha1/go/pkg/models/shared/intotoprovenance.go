package shared



type InTotoProvenance struct {
    BuilderConfig *BuilderConfig `json:"builderConfig,omitempty"`
    Materials []string `json:"materials,omitempty"`
    Metadata *Metadata `json:"metadata,omitempty"`
    Recipe *Recipe `json:"recipe,omitempty"`
    
}

