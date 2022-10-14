package shared

type FindingFindingTypeEnum string

const (
	FindingFindingTypeEnumFindingTypeUnspecified          FindingFindingTypeEnum = "FINDING_TYPE_UNSPECIFIED"
	FindingFindingTypeEnumMixedContent                    FindingFindingTypeEnum = "MIXED_CONTENT"
	FindingFindingTypeEnumOutdatedLibrary                 FindingFindingTypeEnum = "OUTDATED_LIBRARY"
	FindingFindingTypeEnumRosettaFlash                    FindingFindingTypeEnum = "ROSETTA_FLASH"
	FindingFindingTypeEnumXSSCallback                     FindingFindingTypeEnum = "XSS_CALLBACK"
	FindingFindingTypeEnumXSSError                        FindingFindingTypeEnum = "XSS_ERROR"
	FindingFindingTypeEnumClearTextPassword               FindingFindingTypeEnum = "CLEAR_TEXT_PASSWORD"
	FindingFindingTypeEnumInvalidContentType              FindingFindingTypeEnum = "INVALID_CONTENT_TYPE"
	FindingFindingTypeEnumXSSAngularCallback              FindingFindingTypeEnum = "XSS_ANGULAR_CALLBACK"
	FindingFindingTypeEnumInvalidHeader                   FindingFindingTypeEnum = "INVALID_HEADER"
	FindingFindingTypeEnumMisspelledSecurityHeaderName    FindingFindingTypeEnum = "MISSPELLED_SECURITY_HEADER_NAME"
	FindingFindingTypeEnumMismatchingSecurityHeaderValues FindingFindingTypeEnum = "MISMATCHING_SECURITY_HEADER_VALUES"
)

type Finding struct {
	Body                 *string                 `json:"body,omitempty"`
	Description          *string                 `json:"description,omitempty"`
	FinalURL             *string                 `json:"finalUrl,omitempty"`
	FindingType          *FindingFindingTypeEnum `json:"findingType,omitempty"`
	FrameURL             *string                 `json:"frameUrl,omitempty"`
	FuzzedURL            *string                 `json:"fuzzedUrl,omitempty"`
	HTTPMethod           *string                 `json:"httpMethod,omitempty"`
	Name                 *string                 `json:"name,omitempty"`
	OutdatedLibrary      *OutdatedLibrary        `json:"outdatedLibrary,omitempty"`
	ReproductionURL      *string                 `json:"reproductionUrl,omitempty"`
	TrackingID           *string                 `json:"trackingId,omitempty"`
	ViolatingResource    *ViolatingResource      `json:"violatingResource,omitempty"`
	VulnerableHeaders    *VulnerableHeaders      `json:"vulnerableHeaders,omitempty"`
	VulnerableParameters *VulnerableParameters   `json:"vulnerableParameters,omitempty"`
	XSS                  *XSS                    `json:"xss,omitempty"`
}
