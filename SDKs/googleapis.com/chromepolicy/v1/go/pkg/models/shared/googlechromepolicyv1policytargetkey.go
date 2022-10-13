package shared

type GoogleChromePolicyV1PolicyTargetKey struct {
	AdditionalTargetKeys map[string]string `json:"additionalTargetKeys"`
	TargetResource       *string           `json:"targetResource"`
}
