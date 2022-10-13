package shared

type KeyFormFactorEnum string

const (
	KeyFormFactorEnumAllFormFactors KeyFormFactorEnum = "ALL_FORM_FACTORS"
	KeyFormFactorEnumPhone          KeyFormFactorEnum = "PHONE"
	KeyFormFactorEnumDesktop        KeyFormFactorEnum = "DESKTOP"
	KeyFormFactorEnumTablet         KeyFormFactorEnum = "TABLET"
)

type Key struct {
	EffectiveConnectionType *string            `json:"effectiveConnectionType"`
	FormFactor              *KeyFormFactorEnum `json:"formFactor"`
	Origin                  *string            `json:"origin"`
	URL                     *string            `json:"url"`
}
