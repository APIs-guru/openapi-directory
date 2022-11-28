package shared

// GoogleMapsPlayablelocationsV3LogPlayerReportsRequest
// A request for logging your player's bad location reports.
type GoogleMapsPlayablelocationsV3LogPlayerReportsRequest struct {
	ClientInfo    *GoogleMapsUnityClientInfo                  `json:"clientInfo,omitempty"`
	PlayerReports []GoogleMapsPlayablelocationsV3PlayerReport `json:"playerReports,omitempty"`
	RequestID     *string                                     `json:"requestId,omitempty"`
}
