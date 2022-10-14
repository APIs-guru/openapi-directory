package shared

type GetIosReopenAttributionResponse struct {
	DeepLink         *string `json:"deepLink,omitempty"`
	InvitationID     *string `json:"invitationId,omitempty"`
	IosMinAppVersion *string `json:"iosMinAppVersion,omitempty"`
	ResolvedLink     *string `json:"resolvedLink,omitempty"`
	UtmCampaign      *string `json:"utmCampaign,omitempty"`
	UtmContent       *string `json:"utmContent,omitempty"`
	UtmMedium        *string `json:"utmMedium,omitempty"`
	UtmSource        *string `json:"utmSource,omitempty"`
	UtmTerm          *string `json:"utmTerm,omitempty"`
}
