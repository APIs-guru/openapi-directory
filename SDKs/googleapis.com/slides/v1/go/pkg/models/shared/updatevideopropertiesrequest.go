package shared

type UpdateVideoPropertiesRequest struct {
	Fields          *string          `json:"fields,omitempty"`
	ObjectID        *string          `json:"objectId,omitempty"`
	VideoProperties *VideoProperties `json:"videoProperties,omitempty"`
}
