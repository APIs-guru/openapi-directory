package shared

// GoogleCloudRetailV2betaUserInfo
// Information of an end user.
type GoogleCloudRetailV2betaUserInfo struct {
	DirectUserRequest *bool   `json:"directUserRequest,omitempty"`
	IPAddress         *string `json:"ipAddress,omitempty"`
	UserAgent         *string `json:"userAgent,omitempty"`
	UserID            *string `json:"userId,omitempty"`
}
