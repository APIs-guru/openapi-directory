package shared

type GoogleCloudWebriskV1SubmissionThreatTypesEnum string

const (
	GoogleCloudWebriskV1SubmissionThreatTypesEnumThreatTypeUnspecified             GoogleCloudWebriskV1SubmissionThreatTypesEnum = "THREAT_TYPE_UNSPECIFIED"
	GoogleCloudWebriskV1SubmissionThreatTypesEnumMalware                           GoogleCloudWebriskV1SubmissionThreatTypesEnum = "MALWARE"
	GoogleCloudWebriskV1SubmissionThreatTypesEnumSocialEngineering                 GoogleCloudWebriskV1SubmissionThreatTypesEnum = "SOCIAL_ENGINEERING"
	GoogleCloudWebriskV1SubmissionThreatTypesEnumUnwantedSoftware                  GoogleCloudWebriskV1SubmissionThreatTypesEnum = "UNWANTED_SOFTWARE"
	GoogleCloudWebriskV1SubmissionThreatTypesEnumSocialEngineeringExtendedCoverage GoogleCloudWebriskV1SubmissionThreatTypesEnum = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
)

// GoogleCloudWebriskV1Submission
// Wraps a URI that might be displaying malicious content.
type GoogleCloudWebriskV1Submission struct {
	ThreatTypes []GoogleCloudWebriskV1SubmissionThreatTypesEnum `json:"threatTypes,omitempty"`
	URI         *string                                         `json:"uri,omitempty"`
}
