package shared

type GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum string

const (
	GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnumThreatTypeUnspecified             GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum = "THREAT_TYPE_UNSPECIFIED"
	GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnumMalware                           GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum = "MALWARE"
	GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnumSocialEngineering                 GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum = "SOCIAL_ENGINEERING"
	GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnumUnwantedSoftware                  GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum = "UNWANTED_SOFTWARE"
	GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnumSocialEngineeringExtendedCoverage GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
)

type GoogleCloudWebriskV1SearchHashesResponseThreatHash struct {
	ExpireTime  *string                                                             `json:"expireTime"`
	Hash        *string                                                             `json:"hash"`
	ThreatTypes []GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum `json:"threatTypes"`
}
