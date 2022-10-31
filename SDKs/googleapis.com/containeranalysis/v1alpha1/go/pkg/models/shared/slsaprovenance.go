package shared



type SlsaProvenance struct {
    Builder *SlsaBuilder `json:"builder,omitempty"`
    Materials []Material `json:"materials,omitempty"`
    Metadata *SlsaMetadata `json:"metadata,omitempty"`
    Recipe *SlsaRecipe `json:"recipe,omitempty"`
    
}

