package shared

type GetIosPostInstallAttributionResponseAttributionConfidenceEnum string

const (
	GetIosPostInstallAttributionResponseAttributionConfidenceEnumUnknownAttributionConfidence GetIosPostInstallAttributionResponseAttributionConfidenceEnum = "UNKNOWN_ATTRIBUTION_CONFIDENCE"
	GetIosPostInstallAttributionResponseAttributionConfidenceEnumWeak                         GetIosPostInstallAttributionResponseAttributionConfidenceEnum = "WEAK"
	GetIosPostInstallAttributionResponseAttributionConfidenceEnumDefault                      GetIosPostInstallAttributionResponseAttributionConfidenceEnum = "DEFAULT"
	GetIosPostInstallAttributionResponseAttributionConfidenceEnumUnique                       GetIosPostInstallAttributionResponseAttributionConfidenceEnum = "UNIQUE"
)

type GetIosPostInstallAttributionResponseRequestIPVersionEnum string

const (
	GetIosPostInstallAttributionResponseRequestIPVersionEnumUnknownIPVersion GetIosPostInstallAttributionResponseRequestIPVersionEnum = "UNKNOWN_IP_VERSION"
	GetIosPostInstallAttributionResponseRequestIPVersionEnumIpv4             GetIosPostInstallAttributionResponseRequestIPVersionEnum = "IP_V4"
	GetIosPostInstallAttributionResponseRequestIPVersionEnumIpv6             GetIosPostInstallAttributionResponseRequestIPVersionEnum = "IP_V6"
)

type GetIosPostInstallAttributionResponse struct {
	AppMinimumVersion              *string                                                        `json:"appMinimumVersion"`
	AttributionConfidence          *GetIosPostInstallAttributionResponseAttributionConfidenceEnum `json:"attributionConfidence"`
	DeepLink                       *string                                                        `json:"deepLink"`
	ExternalBrowserDestinationLink *string                                                        `json:"externalBrowserDestinationLink"`
	FallbackLink                   *string                                                        `json:"fallbackLink"`
	InvitationID                   *string                                                        `json:"invitationId"`
	IsStrongMatchExecutable        *bool                                                          `json:"isStrongMatchExecutable"`
	MatchMessage                   *string                                                        `json:"matchMessage"`
	RequestIPVersion               *GetIosPostInstallAttributionResponseRequestIPVersionEnum      `json:"requestIpVersion"`
	RequestedLink                  *string                                                        `json:"requestedLink"`
	ResolvedLink                   *string                                                        `json:"resolvedLink"`
	UtmCampaign                    *string                                                        `json:"utmCampaign"`
	UtmContent                     *string                                                        `json:"utmContent"`
	UtmMedium                      *string                                                        `json:"utmMedium"`
	UtmSource                      *string                                                        `json:"utmSource"`
	UtmTerm                        *string                                                        `json:"utmTerm"`
}
