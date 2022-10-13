package shared

type FindingSeverityEnum string

const (
	FindingSeverityEnumSeverityUnspecified FindingSeverityEnum = "SEVERITY_UNSPECIFIED"
	FindingSeverityEnumCritical            FindingSeverityEnum = "CRITICAL"
	FindingSeverityEnumHigh                FindingSeverityEnum = "HIGH"
	FindingSeverityEnumMedium              FindingSeverityEnum = "MEDIUM"
	FindingSeverityEnumLow                 FindingSeverityEnum = "LOW"
)

type Finding struct {
	Body                 *string               `json:"body"`
	Description          *string               `json:"description"`
	FinalURL             *string               `json:"finalUrl"`
	FindingType          *string               `json:"findingType"`
	Form                 *Form                 `json:"form"`
	FrameURL             *string               `json:"frameUrl"`
	FuzzedURL            *string               `json:"fuzzedUrl"`
	HTTPMethod           *string               `json:"httpMethod"`
	Name                 *string               `json:"name"`
	OutdatedLibrary      *OutdatedLibrary      `json:"outdatedLibrary"`
	ReproductionURL      *string               `json:"reproductionUrl"`
	Severity             *FindingSeverityEnum  `json:"severity"`
	TrackingID           *string               `json:"trackingId"`
	ViolatingResource    *ViolatingResource    `json:"violatingResource"`
	VulnerableHeaders    *VulnerableHeaders    `json:"vulnerableHeaders"`
	VulnerableParameters *VulnerableParameters `json:"vulnerableParameters"`
	XSS                  *XSS                  `json:"xss"`
	Xxe                  *Xxe                  `json:"xxe"`
}
