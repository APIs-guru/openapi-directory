package shared

type GoogleCloudRecommendationengineV1beta1UserInfo struct {
	DirectUserRequest *bool   `json:"directUserRequest"`
	IPAddress         *string `json:"ipAddress"`
	UserAgent         *string `json:"userAgent"`
	UserID            *string `json:"userId"`
	VisitorID         *string `json:"visitorId"`
}
