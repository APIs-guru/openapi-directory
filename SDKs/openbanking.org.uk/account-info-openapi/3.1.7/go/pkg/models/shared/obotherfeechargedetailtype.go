package shared

// ObOtherFeeChargeDetailType
// Other Fee/charge type which is not available in the standard code set
type ObOtherFeeChargeDetailType struct {
	Code        *string                `json:"Code,omitempty"`
	Description string                 `json:"Description"`
	FeeCategory ObFeeCategory1CodeEnum `json:"FeeCategory"`
	Name        string                 `json:"Name"`
}
