package shared

type LineConnection struct {
	ConnectedObjectID   *string `json:"connectedObjectId"`
	ConnectionSiteIndex *int32  `json:"connectionSiteIndex"`
}
