package shared

// ReturnPolicyOnlineRestockingFee
// The restocking fee. This can either be a fixed fee or a micro percent.
type ReturnPolicyOnlineRestockingFee struct {
	FixedFee     *PriceAmount `json:"fixedFee,omitempty"`
	MicroPercent *int32       `json:"microPercent,omitempty"`
}
