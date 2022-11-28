package shared

// Zone
// Represents a Google Tag Manager Zone's contents.
type Zone struct {
	AccountID       *string              `json:"accountId,omitempty"`
	Boundary        *ZoneBoundary        `json:"boundary,omitempty"`
	ChildContainer  []ZoneChildContainer `json:"childContainer,omitempty"`
	ContainerID     *string              `json:"containerId,omitempty"`
	Fingerprint     *string              `json:"fingerprint,omitempty"`
	Name            *string              `json:"name,omitempty"`
	Notes           *string              `json:"notes,omitempty"`
	Path            *string              `json:"path,omitempty"`
	TagManagerURL   *string              `json:"tagManagerUrl,omitempty"`
	TypeRestriction *ZoneTypeRestriction `json:"typeRestriction,omitempty"`
	WorkspaceID     *string              `json:"workspaceId,omitempty"`
	ZoneID          *string              `json:"zoneId,omitempty"`
}
