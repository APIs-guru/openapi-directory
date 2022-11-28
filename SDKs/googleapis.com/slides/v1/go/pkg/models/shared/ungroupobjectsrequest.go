package shared

// UngroupObjectsRequest
// Ungroups objects, such as groups.
type UngroupObjectsRequest struct {
	ObjectIds []string `json:"objectIds,omitempty"`
}
