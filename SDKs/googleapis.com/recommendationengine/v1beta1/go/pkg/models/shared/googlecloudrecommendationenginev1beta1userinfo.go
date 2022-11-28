package shared

// GoogleCloudRecommendationengineV1beta1UserInfo
// Information of end users.
type GoogleCloudRecommendationengineV1beta1UserInfo struct {
	DirectUserRequest *bool   `json:"directUserRequest,omitempty"`
	IPAddress         *string `json:"ipAddress,omitempty"`
	UserAgent         *string `json:"userAgent,omitempty"`
	UserID            *string `json:"userId,omitempty"`
	VisitorID         *string `json:"visitorId,omitempty"`
}
