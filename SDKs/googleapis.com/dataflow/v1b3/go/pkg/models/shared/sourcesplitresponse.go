package shared

type SourceSplitResponseOutcomeEnum string

const (
	SourceSplitResponseOutcomeEnumSourceSplitOutcomeUnknown           SourceSplitResponseOutcomeEnum = "SOURCE_SPLIT_OUTCOME_UNKNOWN"
	SourceSplitResponseOutcomeEnumSourceSplitOutcomeUseCurrent        SourceSplitResponseOutcomeEnum = "SOURCE_SPLIT_OUTCOME_USE_CURRENT"
	SourceSplitResponseOutcomeEnumSourceSplitOutcomeSplittingHappened SourceSplitResponseOutcomeEnum = "SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED"
)

type SourceSplitResponse struct {
	Bundles []DerivedSource                 `json:"bundles"`
	Outcome *SourceSplitResponseOutcomeEnum `json:"outcome"`
	Shards  []SourceSplitShard              `json:"shards"`
}
