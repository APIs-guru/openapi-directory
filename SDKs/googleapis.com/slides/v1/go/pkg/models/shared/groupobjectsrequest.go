package shared

// GroupObjectsRequest
// Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children.
type GroupObjectsRequest struct {
	ChildrenObjectIds []string `json:"childrenObjectIds,omitempty"`
	GroupObjectID     *string  `json:"groupObjectId,omitempty"`
}
