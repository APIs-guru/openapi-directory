package shared

// GoogleMapsPlayablelocationsV3LogImpressionsRequest
// A request for logging impressions.
type GoogleMapsPlayablelocationsV3LogImpressionsRequest struct {
	ClientInfo  *GoogleMapsUnityClientInfo                `json:"clientInfo,omitempty"`
	Impressions []GoogleMapsPlayablelocationsV3Impression `json:"impressions,omitempty"`
	RequestID   *string                                   `json:"requestId,omitempty"`
}
