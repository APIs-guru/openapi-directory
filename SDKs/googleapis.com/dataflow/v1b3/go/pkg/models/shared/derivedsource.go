package shared

type DerivedSourceDerivationModeEnum string

const (
	DerivedSourceDerivationModeEnumSourceDerivationModeUnknown          DerivedSourceDerivationModeEnum = "SOURCE_DERIVATION_MODE_UNKNOWN"
	DerivedSourceDerivationModeEnumSourceDerivationModeIndependent      DerivedSourceDerivationModeEnum = "SOURCE_DERIVATION_MODE_INDEPENDENT"
	DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent   DerivedSourceDerivationModeEnum = "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT"
	DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent DerivedSourceDerivationModeEnum = "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"
)

// DerivedSource
// Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split.
type DerivedSource struct {
	DerivationMode *DerivedSourceDerivationModeEnum `json:"derivationMode,omitempty"`
	Source         *Source                          `json:"source,omitempty"`
}
