package shared

type CalendarListEntryNotificationSettings struct {
	Notifications []CalendarNotification `json:"notifications,omitempty"`
}

type CalendarListEntry struct {
	AccessRole           *string                                `json:"accessRole,omitempty"`
	BackgroundColor      *string                                `json:"backgroundColor,omitempty"`
	ColorID              *string                                `json:"colorId,omitempty"`
	ConferenceProperties *ConferenceProperties                  `json:"conferenceProperties,omitempty"`
	DefaultReminders     []EventReminder                        `json:"defaultReminders,omitempty"`
	Deleted              *bool                                  `json:"deleted,omitempty"`
	Description          *string                                `json:"description,omitempty"`
	Etag                 *string                                `json:"etag,omitempty"`
	ForegroundColor      *string                                `json:"foregroundColor,omitempty"`
	Hidden               *bool                                  `json:"hidden,omitempty"`
	ID                   *string                                `json:"id,omitempty"`
	Kind                 *string                                `json:"kind,omitempty"`
	Location             *string                                `json:"location,omitempty"`
	NotificationSettings *CalendarListEntryNotificationSettings `json:"notificationSettings,omitempty"`
	Primary              *bool                                  `json:"primary,omitempty"`
	Selected             *bool                                  `json:"selected,omitempty"`
	Summary              *string                                `json:"summary,omitempty"`
	SummaryOverride      *string                                `json:"summaryOverride,omitempty"`
	TimeZone             *string                                `json:"timeZone,omitempty"`
}
