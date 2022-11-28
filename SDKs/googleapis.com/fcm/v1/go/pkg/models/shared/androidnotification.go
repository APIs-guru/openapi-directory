package shared

type AndroidNotificationNotificationPriorityEnum string

const (
	AndroidNotificationNotificationPriorityEnumPriorityUnspecified AndroidNotificationNotificationPriorityEnum = "PRIORITY_UNSPECIFIED"
	AndroidNotificationNotificationPriorityEnumPriorityMin         AndroidNotificationNotificationPriorityEnum = "PRIORITY_MIN"
	AndroidNotificationNotificationPriorityEnumPriorityLow         AndroidNotificationNotificationPriorityEnum = "PRIORITY_LOW"
	AndroidNotificationNotificationPriorityEnumPriorityDefault     AndroidNotificationNotificationPriorityEnum = "PRIORITY_DEFAULT"
	AndroidNotificationNotificationPriorityEnumPriorityHigh        AndroidNotificationNotificationPriorityEnum = "PRIORITY_HIGH"
	AndroidNotificationNotificationPriorityEnumPriorityMax         AndroidNotificationNotificationPriorityEnum = "PRIORITY_MAX"
)

type AndroidNotificationVisibilityEnum string

const (
	AndroidNotificationVisibilityEnumVisibilityUnspecified AndroidNotificationVisibilityEnum = "VISIBILITY_UNSPECIFIED"
	AndroidNotificationVisibilityEnumPrivate               AndroidNotificationVisibilityEnum = "PRIVATE"
	AndroidNotificationVisibilityEnumPublic                AndroidNotificationVisibilityEnum = "PUBLIC"
	AndroidNotificationVisibilityEnumSecret                AndroidNotificationVisibilityEnum = "SECRET"
)

// AndroidNotification
// Notification to send to android devices.
type AndroidNotification struct {
	Body                    *string                                      `json:"body,omitempty"`
	BodyLocArgs             []string                                     `json:"bodyLocArgs,omitempty"`
	BodyLocKey              *string                                      `json:"bodyLocKey,omitempty"`
	BypassProxyNotification *bool                                        `json:"bypassProxyNotification,omitempty"`
	ChannelID               *string                                      `json:"channelId,omitempty"`
	ClickAction             *string                                      `json:"clickAction,omitempty"`
	Color                   *string                                      `json:"color,omitempty"`
	DefaultLightSettings    *bool                                        `json:"defaultLightSettings,omitempty"`
	DefaultSound            *bool                                        `json:"defaultSound,omitempty"`
	DefaultVibrateTimings   *bool                                        `json:"defaultVibrateTimings,omitempty"`
	EventTime               *string                                      `json:"eventTime,omitempty"`
	Icon                    *string                                      `json:"icon,omitempty"`
	Image                   *string                                      `json:"image,omitempty"`
	LightSettings           *LightSettings                               `json:"lightSettings,omitempty"`
	LocalOnly               *bool                                        `json:"localOnly,omitempty"`
	NotificationCount       *int32                                       `json:"notificationCount,omitempty"`
	NotificationPriority    *AndroidNotificationNotificationPriorityEnum `json:"notificationPriority,omitempty"`
	Sound                   *string                                      `json:"sound,omitempty"`
	Sticky                  *bool                                        `json:"sticky,omitempty"`
	Tag                     *string                                      `json:"tag,omitempty"`
	Ticker                  *string                                      `json:"ticker,omitempty"`
	Title                   *string                                      `json:"title,omitempty"`
	TitleLocArgs            []string                                     `json:"titleLocArgs,omitempty"`
	TitleLocKey             *string                                      `json:"titleLocKey,omitempty"`
	VibrateTimings          []string                                     `json:"vibrateTimings,omitempty"`
	Visibility              *AndroidNotificationVisibilityEnum           `json:"visibility,omitempty"`
}
