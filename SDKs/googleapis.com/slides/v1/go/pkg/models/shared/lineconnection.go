package shared

// LineConnection
// The properties for one end of a Line connection.
type LineConnection struct {
	ConnectedObjectID   *string `json:"connectedObjectId,omitempty"`
	ConnectionSiteIndex *int32  `json:"connectionSiteIndex,omitempty"`
}
