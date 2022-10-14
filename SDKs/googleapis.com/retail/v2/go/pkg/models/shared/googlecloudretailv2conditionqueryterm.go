package shared

type GoogleCloudRetailV2ConditionQueryTerm struct {
	FullMatch *bool   `json:"fullMatch,omitempty"`
	Value     *string `json:"value,omitempty"`
}
