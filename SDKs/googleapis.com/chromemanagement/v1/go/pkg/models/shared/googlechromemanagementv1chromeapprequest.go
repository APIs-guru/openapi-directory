package shared

// GoogleChromeManagementV1ChromeAppRequest
// Details of an app installation request.
type GoogleChromeManagementV1ChromeAppRequest struct {
	AppDetails        *string `json:"appDetails,omitempty"`
	AppID             *string `json:"appId,omitempty"`
	DetailURI         *string `json:"detailUri,omitempty"`
	DisplayName       *string `json:"displayName,omitempty"`
	IconURI           *string `json:"iconUri,omitempty"`
	LatestRequestTime *string `json:"latestRequestTime,omitempty"`
	RequestCount      *string `json:"requestCount,omitempty"`
}
