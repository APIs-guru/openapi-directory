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
	AppMinimumVersion              *string                                                        `json:"appMinimumVersion,omitempty"`
	AttributionConfidence          *GetIosPostInstallAttributionResponseAttributionConfidenceEnum `json:"attributionConfidence,omitempty"`
	DeepLink                       *string                                                        `json:"deepLink,omitempty"`
	ExternalBrowserDestinationLink *string                                                        `json:"externalBrowserDestinationLink,omitempty"`
	FallbackLink                   *string                                                        `json:"fallbackLink,omitempty"`
	InvitationID                   *string                                                        `json:"invitationId,omitempty"`
	IsStrongMatchExecutable        *bool                                                          `json:"isStrongMatchExecutable,omitempty"`
	MatchMessage                   *string                                                        `json:"matchMessage,omitempty"`
	RequestIPVersion               *GetIosPostInstallAttributionResponseRequestIPVersionEnum      `json:"requestIpVersion,omitempty"`
	RequestedLink                  *string                                                        `json:"requestedLink,omitempty"`
	ResolvedLink                   *string                                                        `json:"resolvedLink,omitempty"`
	UtmCampaign                    *string                                                        `json:"utmCampaign,omitempty"`
	UtmContent                     *string                                                        `json:"utmContent,omitempty"`
	UtmMedium                      *string                                                        `json:"utmMedium,omitempty"`
	UtmSource                      *string                                                        `json:"utmSource,omitempty"`
	UtmTerm                        *string                                                        `json:"utmTerm,omitempty"`
}
