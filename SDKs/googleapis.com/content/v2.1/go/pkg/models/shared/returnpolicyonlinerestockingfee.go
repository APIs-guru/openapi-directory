package shared

type ReturnPolicyOnlineRestockingFee struct {
	FixedFee     *PriceAmount `json:"fixedFee"`
	MicroPercent *int32       `json:"microPercent"`
}
