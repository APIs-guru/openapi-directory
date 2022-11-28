package shared

type ThirdPartyLinkStatusLinkStatusEnum string

const (
	ThirdPartyLinkStatusLinkStatusEnumUnknown ThirdPartyLinkStatusLinkStatusEnum = "unknown"
	ThirdPartyLinkStatusLinkStatusEnumFailed  ThirdPartyLinkStatusLinkStatusEnum = "failed"
	ThirdPartyLinkStatusLinkStatusEnumPending ThirdPartyLinkStatusLinkStatusEnum = "pending"
	ThirdPartyLinkStatusLinkStatusEnumLinked  ThirdPartyLinkStatusLinkStatusEnum = "linked"
)

// ThirdPartyLinkStatus
// The third-party link status object contains information about the status of the link.
type ThirdPartyLinkStatus struct {
	LinkStatus *ThirdPartyLinkStatusLinkStatusEnum `json:"linkStatus,omitempty"`
}
