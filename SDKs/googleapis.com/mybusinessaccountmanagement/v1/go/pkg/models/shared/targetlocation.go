package shared

// TargetLocation
// Represents a target location for a pending invitation.
type TargetLocation struct {
	Address      *string `json:"address,omitempty"`
	LocationName *string `json:"locationName,omitempty"`
}
