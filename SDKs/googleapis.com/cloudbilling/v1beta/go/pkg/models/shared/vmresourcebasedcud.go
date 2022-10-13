package shared

type VMResourceBasedCudPlanEnum string

const (
	VMResourceBasedCudPlanEnumCommitmentPlanUnspecified VMResourceBasedCudPlanEnum = "COMMITMENT_PLAN_UNSPECIFIED"
	VMResourceBasedCudPlanEnumTwelveMonth               VMResourceBasedCudPlanEnum = "TWELVE_MONTH"
	VMResourceBasedCudPlanEnumThirtySixMonth            VMResourceBasedCudPlanEnum = "THIRTY_SIX_MONTH"
)

type VMResourceBasedCud struct {
	GuestAccelerator *GuestAccelerator           `json:"guestAccelerator"`
	MachineSeries    *string                     `json:"machineSeries"`
	MemorySizeGb     *float64                    `json:"memorySizeGb"`
	Plan             *VMResourceBasedCudPlanEnum `json:"plan"`
	Region           *string                     `json:"region"`
	VirtualCPUCount  *string                     `json:"virtualCpuCount"`
}
