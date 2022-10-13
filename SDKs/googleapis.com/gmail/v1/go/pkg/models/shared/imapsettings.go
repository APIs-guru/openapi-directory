package shared

type ImapSettingsExpungeBehaviorEnum string

const (
	ImapSettingsExpungeBehaviorEnumExpungeBehaviorUnspecified ImapSettingsExpungeBehaviorEnum = "expungeBehaviorUnspecified"
	ImapSettingsExpungeBehaviorEnumArchive                    ImapSettingsExpungeBehaviorEnum = "archive"
	ImapSettingsExpungeBehaviorEnumTrash                      ImapSettingsExpungeBehaviorEnum = "trash"
	ImapSettingsExpungeBehaviorEnumDeleteForever              ImapSettingsExpungeBehaviorEnum = "deleteForever"
)

type ImapSettings struct {
	AutoExpunge     *bool                            `json:"autoExpunge"`
	Enabled         *bool                            `json:"enabled"`
	ExpungeBehavior *ImapSettingsExpungeBehaviorEnum `json:"expungeBehavior"`
	MaxFolderSize   *int32                           `json:"maxFolderSize"`
}
