package shared




type VMResourceBasedCudPlanEnum string

const (
    VMResourceBasedCudPlanEnumCommitmentPlanUnspecified VMResourceBasedCudPlanEnum = "COMMITMENT_PLAN_UNSPECIFIED"
VMResourceBasedCudPlanEnumTwelveMonth VMResourceBasedCudPlanEnum = "TWELVE_MONTH"
VMResourceBasedCudPlanEnumThirtySixMonth VMResourceBasedCudPlanEnum = "THIRTY_SIX_MONTH"
)


type VMResourceBasedCud struct {
    GuestAccelerator *GuestAccelerator `json:"guestAccelerator,omitempty"`
    MachineSeries *string `json:"machineSeries,omitempty"`
    MemorySizeGb *float64 `json:"memorySizeGb,omitempty"`
    Plan *VMResourceBasedCudPlanEnum `json:"plan,omitempty"`
    Region *string `json:"region,omitempty"`
    VirtualCPUCount *string `json:"virtualCpuCount,omitempty"`
    
}

