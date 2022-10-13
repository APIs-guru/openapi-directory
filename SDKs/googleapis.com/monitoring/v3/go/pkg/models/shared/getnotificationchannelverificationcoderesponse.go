package shared

type GetNotificationChannelVerificationCodeResponse struct {
	Code       *string `json:"code"`
	ExpireTime *string `json:"expireTime"`
}
