package shared

type UpdateLinePropertiesRequest struct {
	Fields         *string         `json:"fields"`
	LineProperties *LineProperties `json:"lineProperties"`
	ObjectID       *string         `json:"objectId"`
}
