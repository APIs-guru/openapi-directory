package shared

type CreateImageRequest struct {
	ElementProperties *PageElementProperties `json:"elementProperties"`
	ObjectID          *string                `json:"objectId"`
	URL               *string                `json:"url"`
}
