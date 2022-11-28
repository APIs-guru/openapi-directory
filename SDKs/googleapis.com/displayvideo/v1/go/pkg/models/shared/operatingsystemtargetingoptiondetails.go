package shared

// OperatingSystemTargetingOptionDetails
// Represents a targetable operating system. This will be populated in the operating_system_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
type OperatingSystemTargetingOptionDetails struct {
	DisplayName *string `json:"displayName,omitempty"`
}
