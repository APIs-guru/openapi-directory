package shared

type UpdateImagePropertiesRequest struct {
	Fields          *string          `json:"fields"`
	ImageProperties *ImageProperties `json:"imageProperties"`
	ObjectID        *string          `json:"objectId"`
}
