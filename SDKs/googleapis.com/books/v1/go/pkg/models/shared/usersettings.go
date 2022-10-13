package shared

type UsersettingsNotesExport struct {
	FolderName *string `json:"folderName"`
	IsEnabled  *bool   `json:"isEnabled"`
}

type UsersettingsNotificationMatchMyInterests struct {
	OptedState *string `json:"opted_state"`
}

type UsersettingsNotificationMoreFromAuthors struct {
	OptedState *string `json:"opted_state"`
}

type UsersettingsNotificationMoreFromSeries struct {
	OptedState *string `json:"opted_state"`
}

type UsersettingsNotificationPriceDrop struct {
	OptedState *string `json:"opted_state"`
}

type UsersettingsNotificationRewardExpirations struct {
	OptedState *string `json:"opted_state"`
}

type UsersettingsNotification struct {
	MatchMyInterests  *UsersettingsNotificationMatchMyInterests  `json:"matchMyInterests"`
	MoreFromAuthors   *UsersettingsNotificationMoreFromAuthors   `json:"moreFromAuthors"`
	MoreFromSeries    *UsersettingsNotificationMoreFromSeries    `json:"moreFromSeries"`
	PriceDrop         *UsersettingsNotificationPriceDrop         `json:"priceDrop"`
	RewardExpirations *UsersettingsNotificationRewardExpirations `json:"rewardExpirations"`
}

type Usersettings struct {
	Kind         *string                   `json:"kind"`
	NotesExport  *UsersettingsNotesExport  `json:"notesExport"`
	Notification *UsersettingsNotification `json:"notification"`
}
