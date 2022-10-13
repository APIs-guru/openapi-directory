package operations

type DeleteUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type DeleteUserRequest struct {
	PathParams DeleteUserPathParams
}

type DeleteUserResponse struct {
	ContentType                        string
	StatusCode                         int64
	DeleteUser200ApplicationJSONObject map[string]interface{}
}
