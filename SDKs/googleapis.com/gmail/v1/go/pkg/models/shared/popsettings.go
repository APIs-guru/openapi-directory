package shared

type PopSettingsAccessWindowEnum string

const (
	PopSettingsAccessWindowEnumAccessWindowUnspecified PopSettingsAccessWindowEnum = "accessWindowUnspecified"
	PopSettingsAccessWindowEnumDisabled                PopSettingsAccessWindowEnum = "disabled"
	PopSettingsAccessWindowEnumFromNowOn               PopSettingsAccessWindowEnum = "fromNowOn"
	PopSettingsAccessWindowEnumAllMail                 PopSettingsAccessWindowEnum = "allMail"
)

type PopSettingsDispositionEnum string

const (
	PopSettingsDispositionEnumDispositionUnspecified PopSettingsDispositionEnum = "dispositionUnspecified"
	PopSettingsDispositionEnumLeaveInInbox           PopSettingsDispositionEnum = "leaveInInbox"
	PopSettingsDispositionEnumArchive                PopSettingsDispositionEnum = "archive"
	PopSettingsDispositionEnumTrash                  PopSettingsDispositionEnum = "trash"
	PopSettingsDispositionEnumMarkRead               PopSettingsDispositionEnum = "markRead"
)

// PopSettings
// POP settings for an account.
type PopSettings struct {
	AccessWindow *PopSettingsAccessWindowEnum `json:"accessWindow,omitempty"`
	Disposition  *PopSettingsDispositionEnum  `json:"disposition,omitempty"`
}
