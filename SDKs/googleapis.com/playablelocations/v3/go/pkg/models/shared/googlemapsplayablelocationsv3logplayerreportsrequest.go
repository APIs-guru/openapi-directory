package shared

type GoogleMapsPlayablelocationsV3LogPlayerReportsRequest struct {
	ClientInfo    *GoogleMapsUnityClientInfo                  `json:"clientInfo,omitempty"`
	PlayerReports []GoogleMapsPlayablelocationsV3PlayerReport `json:"playerReports,omitempty"`
	RequestID     *string                                     `json:"requestId,omitempty"`
}
