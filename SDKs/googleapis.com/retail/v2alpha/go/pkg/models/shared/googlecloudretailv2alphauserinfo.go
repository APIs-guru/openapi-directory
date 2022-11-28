package shared

// GoogleCloudRetailV2alphaUserInfo
// Information of an end user.
type GoogleCloudRetailV2alphaUserInfo struct {
	DirectUserRequest *bool   `json:"directUserRequest,omitempty"`
	IPAddress         *string `json:"ipAddress,omitempty"`
	UserAgent         *string `json:"userAgent,omitempty"`
	UserID            *string `json:"userId,omitempty"`
}
