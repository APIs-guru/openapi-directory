package shared

type GoogleChromePolicyV1ResolvedPolicy struct {
	AddedSourceKey *GoogleChromePolicyV1PolicyTargetKey `json:"addedSourceKey"`
	SourceKey      *GoogleChromePolicyV1PolicyTargetKey `json:"sourceKey"`
	TargetKey      *GoogleChromePolicyV1PolicyTargetKey `json:"targetKey"`
	Value          *GoogleChromePolicyV1PolicyValue     `json:"value"`
}
