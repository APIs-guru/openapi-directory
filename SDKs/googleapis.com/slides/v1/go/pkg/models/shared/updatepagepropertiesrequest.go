package shared

type UpdatePagePropertiesRequest struct {
	Fields         *string         `json:"fields"`
	ObjectID       *string         `json:"objectId"`
	PageProperties *PageProperties `json:"pageProperties"`
}
