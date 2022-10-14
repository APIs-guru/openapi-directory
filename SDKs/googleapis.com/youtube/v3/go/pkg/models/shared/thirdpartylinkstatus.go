package shared

type ThirdPartyLinkStatusLinkStatusEnum string

const (
	ThirdPartyLinkStatusLinkStatusEnumUnknown ThirdPartyLinkStatusLinkStatusEnum = "unknown"
	ThirdPartyLinkStatusLinkStatusEnumFailed  ThirdPartyLinkStatusLinkStatusEnum = "failed"
	ThirdPartyLinkStatusLinkStatusEnumPending ThirdPartyLinkStatusLinkStatusEnum = "pending"
	ThirdPartyLinkStatusLinkStatusEnumLinked  ThirdPartyLinkStatusLinkStatusEnum = "linked"
)

type ThirdPartyLinkStatus struct {
	LinkStatus *ThirdPartyLinkStatusLinkStatusEnum `json:"linkStatus,omitempty"`
}
