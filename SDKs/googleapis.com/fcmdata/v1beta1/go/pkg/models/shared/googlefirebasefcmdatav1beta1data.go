package shared

type GoogleFirebaseFcmDataV1beta1Data struct {
	CountMessagesAccepted       *string                                                  `json:"countMessagesAccepted"`
	DeliveryPerformancePercents *GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents `json:"deliveryPerformancePercents"`
	MessageInsightPercents      *GoogleFirebaseFcmDataV1beta1MessageInsightPercents      `json:"messageInsightPercents"`
	MessageOutcomePercents      *GoogleFirebaseFcmDataV1beta1MessageOutcomePercents      `json:"messageOutcomePercents"`
}
