package shared

// GoogleFirebaseFcmDataV1beta1AndroidDeliveryData
// Message delivery data for a given date, app, and analytics label combination.
type GoogleFirebaseFcmDataV1beta1AndroidDeliveryData struct {
	AnalyticsLabel *string                           `json:"analyticsLabel,omitempty"`
	AppID          *string                           `json:"appId,omitempty"`
	Data           *GoogleFirebaseFcmDataV1beta1Data `json:"data,omitempty"`
	Date           *GoogleTypeDate                   `json:"date,omitempty"`
}
