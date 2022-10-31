package shared

type LineConnection struct {
	ConnectedObjectID   *string `json:"connectedObjectId,omitempty"`
	ConnectionSiteIndex *int32  `json:"connectionSiteIndex,omitempty"`
}
