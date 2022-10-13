package shared

type GoogleMapsPlayablelocationsV3LogImpressionsRequest struct {
	ClientInfo  *GoogleMapsUnityClientInfo                `json:"clientInfo"`
	Impressions []GoogleMapsPlayablelocationsV3Impression `json:"impressions"`
	RequestID   *string                                   `json:"requestId"`
}
