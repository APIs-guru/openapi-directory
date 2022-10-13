package shared

type GoogleCloudRecaptchaenterpriseV1Key struct {
	AndroidSettings *GoogleCloudRecaptchaenterpriseV1AndroidKeySettings `json:"androidSettings"`
	CreateTime      *string                                             `json:"createTime"`
	DisplayName     *string                                             `json:"displayName"`
	IosSettings     *GoogleCloudRecaptchaenterpriseV1IosKeySettings     `json:"iosSettings"`
	Labels          map[string]string                                   `json:"labels"`
	Name            *string                                             `json:"name"`
	TestingOptions  *GoogleCloudRecaptchaenterpriseV1TestingOptions     `json:"testingOptions"`
	WafSettings     *GoogleCloudRecaptchaenterpriseV1WafSettings        `json:"wafSettings"`
	WebSettings     *GoogleCloudRecaptchaenterpriseV1WebKeySettings     `json:"webSettings"`
}
