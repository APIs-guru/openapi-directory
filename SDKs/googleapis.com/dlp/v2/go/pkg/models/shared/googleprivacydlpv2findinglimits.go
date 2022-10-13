package shared

type GooglePrivacyDlpV2FindingLimits struct {
	MaxFindingsPerInfoType []GooglePrivacyDlpV2InfoTypeLimit `json:"maxFindingsPerInfoType"`
	MaxFindingsPerItem     *int32                            `json:"maxFindingsPerItem"`
	MaxFindingsPerRequest  *int32                            `json:"maxFindingsPerRequest"`
}
