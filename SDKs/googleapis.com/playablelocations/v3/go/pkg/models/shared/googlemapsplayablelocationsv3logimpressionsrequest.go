package shared

type GoogleMapsPlayablelocationsV3LogImpressionsRequest struct {
	ClientInfo  *GoogleMapsUnityClientInfo                `json:"clientInfo,omitempty"`
	Impressions []GoogleMapsPlayablelocationsV3Impression `json:"impressions,omitempty"`
	RequestID   *string                                   `json:"requestId,omitempty"`
}
