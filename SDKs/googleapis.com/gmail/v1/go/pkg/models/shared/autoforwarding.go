package shared

type AutoForwardingDispositionEnum string

const (
	AutoForwardingDispositionEnumDispositionUnspecified AutoForwardingDispositionEnum = "dispositionUnspecified"
	AutoForwardingDispositionEnumLeaveInInbox           AutoForwardingDispositionEnum = "leaveInInbox"
	AutoForwardingDispositionEnumArchive                AutoForwardingDispositionEnum = "archive"
	AutoForwardingDispositionEnumTrash                  AutoForwardingDispositionEnum = "trash"
	AutoForwardingDispositionEnumMarkRead               AutoForwardingDispositionEnum = "markRead"
)

type AutoForwarding struct {
	Disposition  *AutoForwardingDispositionEnum `json:"disposition"`
	EmailAddress *string                        `json:"emailAddress"`
	Enabled      *bool                          `json:"enabled"`
}
