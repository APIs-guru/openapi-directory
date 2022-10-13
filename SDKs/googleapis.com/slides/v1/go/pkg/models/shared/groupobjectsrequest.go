package shared

type GroupObjectsRequest struct {
	ChildrenObjectIds []string `json:"childrenObjectIds"`
	GroupObjectID     *string  `json:"groupObjectId"`
}
