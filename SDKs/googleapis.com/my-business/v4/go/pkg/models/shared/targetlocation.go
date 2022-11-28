package shared

// TargetLocation
// Represents a target location for a pending invitation.
type TargetLocation struct {
	LocationAddress *string `json:"locationAddress,omitempty"`
	LocationName    *string `json:"locationName,omitempty"`
}
