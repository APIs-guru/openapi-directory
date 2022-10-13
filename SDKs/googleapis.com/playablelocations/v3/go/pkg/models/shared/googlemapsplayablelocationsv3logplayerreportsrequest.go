package shared

type GoogleMapsPlayablelocationsV3LogPlayerReportsRequest struct {
	ClientInfo    *GoogleMapsUnityClientInfo                  `json:"clientInfo"`
	PlayerReports []GoogleMapsPlayablelocationsV3PlayerReport `json:"playerReports"`
	RequestID     *string                                     `json:"requestId"`
}
