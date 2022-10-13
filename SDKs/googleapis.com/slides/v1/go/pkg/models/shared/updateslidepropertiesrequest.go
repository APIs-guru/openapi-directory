package shared

type UpdateSlidePropertiesRequest struct {
	Fields          *string          `json:"fields"`
	ObjectID        *string          `json:"objectId"`
	SlideProperties *SlideProperties `json:"slideProperties"`
}
