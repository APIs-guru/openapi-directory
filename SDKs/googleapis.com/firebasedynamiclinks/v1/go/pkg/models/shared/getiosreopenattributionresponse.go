package shared

type GetIosReopenAttributionResponse struct {
	DeepLink         *string `json:"deepLink"`
	InvitationID     *string `json:"invitationId"`
	IosMinAppVersion *string `json:"iosMinAppVersion"`
	ResolvedLink     *string `json:"resolvedLink"`
	UtmCampaign      *string `json:"utmCampaign"`
	UtmContent       *string `json:"utmContent"`
	UtmMedium        *string `json:"utmMedium"`
	UtmSource        *string `json:"utmSource"`
	UtmTerm          *string `json:"utmTerm"`
}
