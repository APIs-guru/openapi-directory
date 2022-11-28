package shared

type QueryRequestFormFactorEnum string

const (
	QueryRequestFormFactorEnumAllFormFactors QueryRequestFormFactorEnum = "ALL_FORM_FACTORS"
	QueryRequestFormFactorEnumPhone          QueryRequestFormFactorEnum = "PHONE"
	QueryRequestFormFactorEnumDesktop        QueryRequestFormFactorEnum = "DESKTOP"
	QueryRequestFormFactorEnumTablet         QueryRequestFormFactorEnum = "TABLET"
)

// QueryRequest
// Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record.
type QueryRequest struct {
	EffectiveConnectionType *string                     `json:"effectiveConnectionType,omitempty"`
	FormFactor              *QueryRequestFormFactorEnum `json:"formFactor,omitempty"`
	Metrics                 []string                    `json:"metrics,omitempty"`
	Origin                  *string                     `json:"origin,omitempty"`
	URL                     *string                     `json:"url,omitempty"`
}
