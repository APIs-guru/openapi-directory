package shared

type GetNotificationChannelVerificationCodeResponse struct {
	Code       *string `json:"code,omitempty"`
	ExpireTime *string `json:"expireTime,omitempty"`
}
