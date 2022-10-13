package operations

type CreateUserRequestBody struct {
	DisplayName *string `json:"display_name"`
	ImageURL    *string `json:"image_url"`
	Name        *string `json:"name"`
}

type CreateUserRequest struct {
	Request *CreateUserRequestBody `request:"mediaType=application/json"`
}

type CreateUser200ApplicationJSON struct {
	Href *string `json:"href"`
	ID   *string `json:"id"`
}

type CreateUserResponse struct {
	ContentType                        string
	StatusCode                         int64
	CreateUser200ApplicationJSONObject *CreateUser200ApplicationJSON
}
