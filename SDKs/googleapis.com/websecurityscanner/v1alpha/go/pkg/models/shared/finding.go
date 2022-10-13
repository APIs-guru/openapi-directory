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
	Body                 *string                 `json:"body"`
	Description          *string                 `json:"description"`
	FinalURL             *string                 `json:"finalUrl"`
	FindingType          *FindingFindingTypeEnum `json:"findingType"`
	FrameURL             *string                 `json:"frameUrl"`
	FuzzedURL            *string                 `json:"fuzzedUrl"`
	HTTPMethod           *string                 `json:"httpMethod"`
	Name                 *string                 `json:"name"`
	OutdatedLibrary      *OutdatedLibrary        `json:"outdatedLibrary"`
	ReproductionURL      *string                 `json:"reproductionUrl"`
	TrackingID           *string                 `json:"trackingId"`
	ViolatingResource    *ViolatingResource      `json:"violatingResource"`
	VulnerableHeaders    *VulnerableHeaders      `json:"vulnerableHeaders"`
	VulnerableParameters *VulnerableParameters   `json:"vulnerableParameters"`
	XSS                  *XSS                    `json:"xss"`
}
