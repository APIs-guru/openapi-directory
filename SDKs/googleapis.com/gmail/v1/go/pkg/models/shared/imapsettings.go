package shared

type ImapSettingsExpungeBehaviorEnum string

const (
	ImapSettingsExpungeBehaviorEnumExpungeBehaviorUnspecified ImapSettingsExpungeBehaviorEnum = "expungeBehaviorUnspecified"
	ImapSettingsExpungeBehaviorEnumArchive                    ImapSettingsExpungeBehaviorEnum = "archive"
	ImapSettingsExpungeBehaviorEnumTrash                      ImapSettingsExpungeBehaviorEnum = "trash"
	ImapSettingsExpungeBehaviorEnumDeleteForever              ImapSettingsExpungeBehaviorEnum = "deleteForever"
)

// ImapSettings
// IMAP settings for an account.
type ImapSettings struct {
	AutoExpunge     *bool                            `json:"autoExpunge,omitempty"`
	Enabled         *bool                            `json:"enabled,omitempty"`
	ExpungeBehavior *ImapSettingsExpungeBehaviorEnum `json:"expungeBehavior,omitempty"`
	MaxFolderSize   *int32                           `json:"maxFolderSize,omitempty"`
}
