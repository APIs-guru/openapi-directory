package shared

// GoogleCloudRetailV2UserInfo
// Information of an end user.
type GoogleCloudRetailV2UserInfo struct {
	DirectUserRequest *bool   `json:"directUserRequest,omitempty"`
	IPAddress         *string `json:"ipAddress,omitempty"`
	UserAgent         *string `json:"userAgent,omitempty"`
	UserID            *string `json:"userId,omitempty"`
}
