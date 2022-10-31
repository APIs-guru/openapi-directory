package shared



type GoogleCloudRecaptchaenterpriseV1Key struct {
    AndroidSettings *GoogleCloudRecaptchaenterpriseV1AndroidKeySettings `json:"androidSettings,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    IosSettings *GoogleCloudRecaptchaenterpriseV1IosKeySettings `json:"iosSettings,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    TestingOptions *GoogleCloudRecaptchaenterpriseV1TestingOptions `json:"testingOptions,omitempty"`
    WafSettings *GoogleCloudRecaptchaenterpriseV1WafSettings `json:"wafSettings,omitempty"`
    WebSettings *GoogleCloudRecaptchaenterpriseV1WebKeySettings `json:"webSettings,omitempty"`
    
}

