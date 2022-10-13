package shared

type GoogleCloudRetailV2betaUserInfo struct {
	DirectUserRequest *bool   `json:"directUserRequest"`
	IPAddress         *string `json:"ipAddress"`
	UserAgent         *string `json:"userAgent"`
	UserID            *string `json:"userId"`
}
