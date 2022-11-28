package shared

// ThirdPartyVerifierAssignedTargetingOptionDetails
// Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`.
type ThirdPartyVerifierAssignedTargetingOptionDetails struct {
	Adloox            *Adloox            `json:"adloox,omitempty"`
	DoubleVerify      *DoubleVerify      `json:"doubleVerify,omitempty"`
	IntegralAdScience *IntegralAdScience `json:"integralAdScience,omitempty"`
}
