package shared

type DerivedSourceDerivationModeEnum string

const (
	DerivedSourceDerivationModeEnumSourceDerivationModeUnknown          DerivedSourceDerivationModeEnum = "SOURCE_DERIVATION_MODE_UNKNOWN"
	DerivedSourceDerivationModeEnumSourceDerivationModeIndependent      DerivedSourceDerivationModeEnum = "SOURCE_DERIVATION_MODE_INDEPENDENT"
	DerivedSourceDerivationModeEnumSourceDerivationModeChildOfCurrent   DerivedSourceDerivationModeEnum = "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT"
	DerivedSourceDerivationModeEnumSourceDerivationModeSiblingOfCurrent DerivedSourceDerivationModeEnum = "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"
)

type DerivedSource struct {
	DerivationMode *DerivedSourceDerivationModeEnum `json:"derivationMode"`
	Source         *Source                          `json:"source"`
}
