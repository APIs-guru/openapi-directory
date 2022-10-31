package shared




type GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum string

const (
    GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnumResponseTypeUnspecified GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum = "RESPONSE_TYPE_UNSPECIFIED"
GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnumDiff GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum = "DIFF"
GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnumReset GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum = "RESET"
)


type GoogleCloudWebriskV1ComputeThreatListDiffResponse struct {
    Additions *GoogleCloudWebriskV1ThreatEntryAdditions `json:"additions,omitempty"`
    Checksum *GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum `json:"checksum,omitempty"`
    NewVersionToken *string `json:"newVersionToken,omitempty"`
    RecommendedNextDiff *string `json:"recommendedNextDiff,omitempty"`
    Removals *GoogleCloudWebriskV1ThreatEntryRemovals `json:"removals,omitempty"`
    ResponseType *GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum `json:"responseType,omitempty"`
    
}

