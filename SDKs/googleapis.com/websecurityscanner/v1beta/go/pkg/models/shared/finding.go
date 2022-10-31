package shared




type FindingSeverityEnum string

const (
    FindingSeverityEnumSeverityUnspecified FindingSeverityEnum = "SEVERITY_UNSPECIFIED"
FindingSeverityEnumCritical FindingSeverityEnum = "CRITICAL"
FindingSeverityEnumHigh FindingSeverityEnum = "HIGH"
FindingSeverityEnumMedium FindingSeverityEnum = "MEDIUM"
FindingSeverityEnumLow FindingSeverityEnum = "LOW"
)


type Finding struct {
    Body *string `json:"body,omitempty"`
    Description *string `json:"description,omitempty"`
    FinalURL *string `json:"finalUrl,omitempty"`
    FindingType *string `json:"findingType,omitempty"`
    Form *Form `json:"form,omitempty"`
    FrameURL *string `json:"frameUrl,omitempty"`
    FuzzedURL *string `json:"fuzzedUrl,omitempty"`
    HTTPMethod *string `json:"httpMethod,omitempty"`
    Name *string `json:"name,omitempty"`
    OutdatedLibrary *OutdatedLibrary `json:"outdatedLibrary,omitempty"`
    ReproductionURL *string `json:"reproductionUrl,omitempty"`
    Severity *FindingSeverityEnum `json:"severity,omitempty"`
    TrackingID *string `json:"trackingId,omitempty"`
    ViolatingResource *ViolatingResource `json:"violatingResource,omitempty"`
    VulnerableHeaders *VulnerableHeaders `json:"vulnerableHeaders,omitempty"`
    VulnerableParameters *VulnerableParameters `json:"vulnerableParameters,omitempty"`
    XSS *XSS `json:"xss,omitempty"`
    Xxe *Xxe `json:"xxe,omitempty"`
    
}

