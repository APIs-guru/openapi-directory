package shared

type ResponseDefaultResourceResource struct {
	ID  *string `json:"id"`
	URL *string `json:"url"`
}

type ResponseDefaultResource struct {
	Resource *ResponseDefaultResourceResource `json:"resource"`
	Status   *int64                           `json:"status"`
}
