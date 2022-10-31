package shared




type SourceSplitShardDerivationModeEnum string

const (
    SourceSplitShardDerivationModeEnumSourceDerivationModeUnknown SourceSplitShardDerivationModeEnum = "SOURCE_DERIVATION_MODE_UNKNOWN"
SourceSplitShardDerivationModeEnumSourceDerivationModeIndependent SourceSplitShardDerivationModeEnum = "SOURCE_DERIVATION_MODE_INDEPENDENT"
SourceSplitShardDerivationModeEnumSourceDerivationModeChildOfCurrent SourceSplitShardDerivationModeEnum = "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT"
SourceSplitShardDerivationModeEnumSourceDerivationModeSiblingOfCurrent SourceSplitShardDerivationModeEnum = "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"
)


type SourceSplitShard struct {
    DerivationMode *SourceSplitShardDerivationModeEnum `json:"derivationMode,omitempty"`
    Source *Source `json:"source,omitempty"`
    
}

