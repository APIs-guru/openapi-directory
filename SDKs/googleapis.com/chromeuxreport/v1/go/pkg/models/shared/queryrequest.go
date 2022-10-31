package shared




type QueryRequestFormFactorEnum string

const (
    QueryRequestFormFactorEnumAllFormFactors QueryRequestFormFactorEnum = "ALL_FORM_FACTORS"
QueryRequestFormFactorEnumPhone QueryRequestFormFactorEnum = "PHONE"
QueryRequestFormFactorEnumDesktop QueryRequestFormFactorEnum = "DESKTOP"
QueryRequestFormFactorEnumTablet QueryRequestFormFactorEnum = "TABLET"
)


type QueryRequest struct {
    EffectiveConnectionType *string `json:"effectiveConnectionType,omitempty"`
    FormFactor *QueryRequestFormFactorEnum `json:"formFactor,omitempty"`
    Metrics []string `json:"metrics,omitempty"`
    Origin *string `json:"origin,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

