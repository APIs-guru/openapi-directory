package shared

type GoogleCloudRecaptchaenterpriseV1Event struct {
	ExpectedAction  *string `json:"expectedAction"`
	HashedAccountID *string `json:"hashedAccountId"`
	SiteKey         *string `json:"siteKey"`
	Token           *string `json:"token"`
	UserAgent       *string `json:"userAgent"`
	UserIPAddress   *string `json:"userIpAddress"`
}
