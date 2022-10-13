package shared

type CalendarListEntryNotificationSettings struct {
	Notifications []CalendarNotification `json:"notifications"`
}

type CalendarListEntry struct {
	AccessRole           *string                                `json:"accessRole"`
	BackgroundColor      *string                                `json:"backgroundColor"`
	ColorID              *string                                `json:"colorId"`
	ConferenceProperties *ConferenceProperties                  `json:"conferenceProperties"`
	DefaultReminders     []EventReminder                        `json:"defaultReminders"`
	Deleted              *bool                                  `json:"deleted"`
	Description          *string                                `json:"description"`
	Etag                 *string                                `json:"etag"`
	ForegroundColor      *string                                `json:"foregroundColor"`
	Hidden               *bool                                  `json:"hidden"`
	ID                   *string                                `json:"id"`
	Kind                 *string                                `json:"kind"`
	Location             *string                                `json:"location"`
	NotificationSettings *CalendarListEntryNotificationSettings `json:"notificationSettings"`
	Primary              *bool                                  `json:"primary"`
	Selected             *bool                                  `json:"selected"`
	Summary              *string                                `json:"summary"`
	SummaryOverride      *string                                `json:"summaryOverride"`
	TimeZone             *string                                `json:"timeZone"`
}
