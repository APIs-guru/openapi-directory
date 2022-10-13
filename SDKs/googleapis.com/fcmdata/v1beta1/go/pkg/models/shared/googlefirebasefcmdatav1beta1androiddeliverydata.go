package shared

type GoogleFirebaseFcmDataV1beta1AndroidDeliveryData struct {
	AnalyticsLabel *string                           `json:"analyticsLabel"`
	AppID          *string                           `json:"appId"`
	Data           *GoogleFirebaseFcmDataV1beta1Data `json:"data"`
	Date           *GoogleTypeDate                   `json:"date"`
}
