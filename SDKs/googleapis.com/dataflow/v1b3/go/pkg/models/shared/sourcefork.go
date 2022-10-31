package shared



type SourceFork struct {
    Primary *SourceSplitShard `json:"primary,omitempty"`
    PrimarySource *DerivedSource `json:"primarySource,omitempty"`
    Residual *SourceSplitShard `json:"residual,omitempty"`
    ResidualSource *DerivedSource `json:"residualSource,omitempty"`
    
}

