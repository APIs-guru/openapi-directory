package shared

type UpdateVideoPropertiesRequest struct {
	Fields          *string          `json:"fields"`
	ObjectID        *string          `json:"objectId"`
	VideoProperties *VideoProperties `json:"videoProperties"`
}
