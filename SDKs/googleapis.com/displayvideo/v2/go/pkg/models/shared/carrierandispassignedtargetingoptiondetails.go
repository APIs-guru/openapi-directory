package shared

// CarrierAndIspAssignedTargetingOptionDetailsInput
// Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
type CarrierAndIspAssignedTargetingOptionDetailsInput struct {
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}

// CarrierAndIspAssignedTargetingOptionDetails
// Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
type CarrierAndIspAssignedTargetingOptionDetails struct {
	DisplayName       *string `json:"displayName,omitempty"`
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}
