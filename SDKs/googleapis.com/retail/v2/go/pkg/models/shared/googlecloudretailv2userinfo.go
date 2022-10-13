package shared

type GoogleCloudRetailV2UserInfo struct {
	DirectUserRequest *bool   `json:"directUserRequest"`
	IPAddress         *string `json:"ipAddress"`
	UserAgent         *string `json:"userAgent"`
	UserID            *string `json:"userId"`
}
