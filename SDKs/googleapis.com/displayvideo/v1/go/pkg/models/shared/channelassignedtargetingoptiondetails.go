package shared

// ChannelAssignedTargetingOptionDetails
// Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`.
type ChannelAssignedTargetingOptionDetails struct {
	ChannelID *string `json:"channelId,omitempty"`
	Negative  *bool   `json:"negative,omitempty"`
}
