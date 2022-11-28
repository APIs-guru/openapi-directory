package shared

type KeyFormFactorEnum string

const (
	KeyFormFactorEnumAllFormFactors KeyFormFactorEnum = "ALL_FORM_FACTORS"
	KeyFormFactorEnumPhone          KeyFormFactorEnum = "PHONE"
	KeyFormFactorEnumDesktop        KeyFormFactorEnum = "DESKTOP"
	KeyFormFactorEnumTablet         KeyFormFactorEnum = "TABLET"
)

// Key
// Key defines all the dimensions that identify this record as unique.
type Key struct {
	EffectiveConnectionType *string            `json:"effectiveConnectionType,omitempty"`
	FormFactor              *KeyFormFactorEnum `json:"formFactor,omitempty"`
	Origin                  *string            `json:"origin,omitempty"`
	URL                     *string            `json:"url,omitempty"`
}
