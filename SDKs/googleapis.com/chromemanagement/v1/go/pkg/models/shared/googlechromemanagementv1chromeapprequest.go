package shared

type GoogleChromeManagementV1ChromeAppRequest struct {
	AppDetails        *string `json:"appDetails"`
	AppID             *string `json:"appId"`
	DetailURI         *string `json:"detailUri"`
	DisplayName       *string `json:"displayName"`
	IconURI           *string `json:"iconUri"`
	LatestRequestTime *string `json:"latestRequestTime"`
	RequestCount      *string `json:"requestCount"`
}
