package shared

type QueryRequestFormFactorEnum string

const (
	QueryRequestFormFactorEnumAllFormFactors QueryRequestFormFactorEnum = "ALL_FORM_FACTORS"
	QueryRequestFormFactorEnumPhone          QueryRequestFormFactorEnum = "PHONE"
	QueryRequestFormFactorEnumDesktop        QueryRequestFormFactorEnum = "DESKTOP"
	QueryRequestFormFactorEnumTablet         QueryRequestFormFactorEnum = "TABLET"
)

type QueryRequest struct {
	EffectiveConnectionType *string                     `json:"effectiveConnectionType"`
	FormFactor              *QueryRequestFormFactorEnum `json:"formFactor"`
	Metrics                 []string                    `json:"metrics"`
	Origin                  *string                     `json:"origin"`
	URL                     *string                     `json:"url"`
}
