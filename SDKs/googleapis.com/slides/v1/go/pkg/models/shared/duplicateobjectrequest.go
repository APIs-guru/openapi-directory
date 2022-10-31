package shared

type DuplicateObjectRequest struct {
	ObjectID  *string           `json:"objectId,omitempty"`
	ObjectIds map[string]string `json:"objectIds,omitempty"`
}
