package shared

type GoogleFirebaseFcmDataV1beta1Data struct {
	CountMessagesAccepted       *string                                                  `json:"countMessagesAccepted,omitempty"`
	DeliveryPerformancePercents *GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents `json:"deliveryPerformancePercents,omitempty"`
	MessageInsightPercents      *GoogleFirebaseFcmDataV1beta1MessageInsightPercents      `json:"messageInsightPercents,omitempty"`
	MessageOutcomePercents      *GoogleFirebaseFcmDataV1beta1MessageOutcomePercents      `json:"messageOutcomePercents,omitempty"`
}
