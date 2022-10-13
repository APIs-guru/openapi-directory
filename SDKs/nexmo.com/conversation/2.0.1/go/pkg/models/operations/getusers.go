package operations

type GetUsers200ApplicationJSON struct {
	Href *string `json:"href"`
	ID   *string `json:"id"`
	Name *string `json:"name"`
}

type GetUsersResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetUsers200ApplicationJSONObjects []GetUsers200ApplicationJSON
}
