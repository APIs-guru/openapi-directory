package shared




type SourceSplitResponseOutcomeEnum string

const (
    SourceSplitResponseOutcomeEnumSourceSplitOutcomeUnknown SourceSplitResponseOutcomeEnum = "SOURCE_SPLIT_OUTCOME_UNKNOWN"
SourceSplitResponseOutcomeEnumSourceSplitOutcomeUseCurrent SourceSplitResponseOutcomeEnum = "SOURCE_SPLIT_OUTCOME_USE_CURRENT"
SourceSplitResponseOutcomeEnumSourceSplitOutcomeSplittingHappened SourceSplitResponseOutcomeEnum = "SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED"
)


type SourceSplitResponse struct {
    Bundles []DerivedSource `json:"bundles,omitempty"`
    Outcome *SourceSplitResponseOutcomeEnum `json:"outcome,omitempty"`
    Shards []SourceSplitShard `json:"shards,omitempty"`
    
}

