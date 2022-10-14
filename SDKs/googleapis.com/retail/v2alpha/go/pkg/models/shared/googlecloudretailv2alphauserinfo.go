package shared

type GoogleCloudRetailV2alphaUserInfo struct {
	DirectUserRequest *bool   `json:"directUserRequest,omitempty"`
	IPAddress         *string `json:"ipAddress,omitempty"`
	UserAgent         *string `json:"userAgent,omitempty"`
	UserID            *string `json:"userId,omitempty"`
}
