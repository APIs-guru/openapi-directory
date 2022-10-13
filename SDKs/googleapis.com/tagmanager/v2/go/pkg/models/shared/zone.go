package shared

type Zone struct {
	AccountID       *string              `json:"accountId"`
	Boundary        *ZoneBoundary        `json:"boundary"`
	ChildContainer  []ZoneChildContainer `json:"childContainer"`
	ContainerID     *string              `json:"containerId"`
	Fingerprint     *string              `json:"fingerprint"`
	Name            *string              `json:"name"`
	Notes           *string              `json:"notes"`
	Path            *string              `json:"path"`
	TagManagerURL   *string              `json:"tagManagerUrl"`
	TypeRestriction *ZoneTypeRestriction `json:"typeRestriction"`
	WorkspaceID     *string              `json:"workspaceId"`
	ZoneID          *string              `json:"zoneId"`
}
