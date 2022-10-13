package shared

type GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum string

const (
	GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnumResponseTypeUnspecified GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum = "RESPONSE_TYPE_UNSPECIFIED"
	GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnumDiff                    GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum = "DIFF"
	GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnumReset                   GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum = "RESET"
)

type GoogleCloudWebriskV1ComputeThreatListDiffResponse struct {
	Additions           *GoogleCloudWebriskV1ThreatEntryAdditions                          `json:"additions"`
	Checksum            *GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum         `json:"checksum"`
	NewVersionToken     *string                                                            `json:"newVersionToken"`
	RecommendedNextDiff *string                                                            `json:"recommendedNextDiff"`
	Removals            *GoogleCloudWebriskV1ThreatEntryRemovals                           `json:"removals"`
	ResponseType        *GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum `json:"responseType"`
}
