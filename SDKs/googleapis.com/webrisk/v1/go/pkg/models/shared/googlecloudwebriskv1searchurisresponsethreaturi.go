package shared

type GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnum string

const (
	GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnumThreatTypeUnspecified             GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnum = "THREAT_TYPE_UNSPECIFIED"
	GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnumMalware                           GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnum = "MALWARE"
	GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnumSocialEngineering                 GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnum = "SOCIAL_ENGINEERING"
	GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnumUnwantedSoftware                  GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnum = "UNWANTED_SOFTWARE"
	GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnumSocialEngineeringExtendedCoverage GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnum = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
)

// GoogleCloudWebriskV1SearchUrisResponseThreatURI
// Contains threat information on a matching uri.
type GoogleCloudWebriskV1SearchUrisResponseThreatURI struct {
	ExpireTime  *string                                                          `json:"expireTime,omitempty"`
	ThreatTypes []GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnum `json:"threatTypes,omitempty"`
}
