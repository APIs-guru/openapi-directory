package operations

type UpdateUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type UpdateUserRequest struct {
	PathParams UpdateUserPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type UpdateUserResponse struct {
	ContentType                     string
	StatusCode                      int64
	UpdateUser200ApplicationJSONAny *interface{}
}
