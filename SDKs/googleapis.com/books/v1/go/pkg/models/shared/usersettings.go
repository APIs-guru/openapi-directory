package shared

// UsersettingsNotesExport
// User settings in sub-objects, each for different purposes.
type UsersettingsNotesExport struct {
	FolderName *string `json:"folderName,omitempty"`
	IsEnabled  *bool   `json:"isEnabled,omitempty"`
}

type UsersettingsNotificationMatchMyInterests struct {
	OptedState *string `json:"opted_state,omitempty"`
}

type UsersettingsNotificationMoreFromAuthors struct {
	OptedState *string `json:"opted_state,omitempty"`
}

type UsersettingsNotificationMoreFromSeries struct {
	OptedState *string `json:"opted_state,omitempty"`
}

type UsersettingsNotificationPriceDrop struct {
	OptedState *string `json:"opted_state,omitempty"`
}

type UsersettingsNotificationRewardExpirations struct {
	OptedState *string `json:"opted_state,omitempty"`
}

type UsersettingsNotification struct {
	MatchMyInterests  *UsersettingsNotificationMatchMyInterests  `json:"matchMyInterests,omitempty"`
	MoreFromAuthors   *UsersettingsNotificationMoreFromAuthors   `json:"moreFromAuthors,omitempty"`
	MoreFromSeries    *UsersettingsNotificationMoreFromSeries    `json:"moreFromSeries,omitempty"`
	PriceDrop         *UsersettingsNotificationPriceDrop         `json:"priceDrop,omitempty"`
	RewardExpirations *UsersettingsNotificationRewardExpirations `json:"rewardExpirations,omitempty"`
}

type Usersettings struct {
	Kind         *string                   `json:"kind,omitempty"`
	NotesExport  *UsersettingsNotesExport  `json:"notesExport,omitempty"`
	Notification *UsersettingsNotification `json:"notification,omitempty"`
}
