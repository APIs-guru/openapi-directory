package shared

type ReturnPolicyOnlineRestockingFee struct {
	FixedFee     *PriceAmount `json:"fixedFee,omitempty"`
	MicroPercent *int32       `json:"microPercent,omitempty"`
}
