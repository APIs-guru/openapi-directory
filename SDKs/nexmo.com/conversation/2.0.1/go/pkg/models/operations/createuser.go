package operations

// CreateUserRequestBody
// Create a Member in invite state
type CreateUserRequestBody struct {
	DisplayName *string `json:"display_name,omitempty"`
	ImageURL    *string `json:"image_url,omitempty"`
	Name        *string `json:"name,omitempty"`
}

type CreateUser200ApplicationJSON struct {
	Href *string `json:"href,omitempty"`
	ID   *string `json:"id,omitempty"`
}

type CreateUserRequest struct {
	Request *CreateUserRequestBody `request:"mediaType=application/json"`
}

type CreateUserResponse struct {
	ContentType                        string
	StatusCode                         int64
	CreateUser200ApplicationJSONObject *CreateUser200ApplicationJSON
}
