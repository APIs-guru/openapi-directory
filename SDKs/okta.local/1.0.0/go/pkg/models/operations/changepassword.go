package operations

type ChangePasswordPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type ChangePasswordRequestBodyNewPassword struct {
	Value *string `json:"value"`
}

type ChangePasswordRequestBodyOldPassword struct {
	Value *string `json:"value"`
}

type ChangePasswordRequestBody struct {
	NewPassword *ChangePasswordRequestBodyNewPassword `json:"newPassword"`
	OldPassword *ChangePasswordRequestBodyOldPassword `json:"oldPassword"`
}

type ChangePasswordRequest struct {
	PathParams ChangePasswordPathParams
	Request    *ChangePasswordRequestBody `request:"mediaType=application/json"`
}

type ChangePasswordResponse struct {
	ContentType string
	StatusCode  int64
}
