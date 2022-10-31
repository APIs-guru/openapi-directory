package operations

type ChangePasswordPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type ChangePasswordRequestBodyNewPassword struct {
	Value *string `json:"value,omitempty"`
}

type ChangePasswordRequestBodyOldPassword struct {
	Value *string `json:"value,omitempty"`
}

type ChangePasswordRequestBody struct {
	NewPassword *ChangePasswordRequestBodyNewPassword `json:"newPassword,omitempty"`
	OldPassword *ChangePasswordRequestBodyOldPassword `json:"oldPassword,omitempty"`
}

type ChangePasswordRequest struct {
	PathParams ChangePasswordPathParams
	Request    *ChangePasswordRequestBody `request:"mediaType=application/json"`
}

type ChangePasswordResponse struct {
	ContentType string
	StatusCode  int64
}
