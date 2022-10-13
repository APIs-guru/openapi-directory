package shared

type DuplicateObjectRequest struct {
	ObjectID  *string           `json:"objectId"`
	ObjectIds map[string]string `json:"objectIds"`
}
