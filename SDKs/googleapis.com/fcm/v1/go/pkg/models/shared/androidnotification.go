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

type AndroidNotification struct {
	Body                    *string                                      `json:"body"`
	BodyLocArgs             []string                                     `json:"bodyLocArgs"`
	BodyLocKey              *string                                      `json:"bodyLocKey"`
	BypassProxyNotification *bool                                        `json:"bypassProxyNotification"`
	ChannelID               *string                                      `json:"channelId"`
	ClickAction             *string                                      `json:"clickAction"`
	Color                   *string                                      `json:"color"`
	DefaultLightSettings    *bool                                        `json:"defaultLightSettings"`
	DefaultSound            *bool                                        `json:"defaultSound"`
	DefaultVibrateTimings   *bool                                        `json:"defaultVibrateTimings"`
	EventTime               *string                                      `json:"eventTime"`
	Icon                    *string                                      `json:"icon"`
	Image                   *string                                      `json:"image"`
	LightSettings           *LightSettings                               `json:"lightSettings"`
	LocalOnly               *bool                                        `json:"localOnly"`
	NotificationCount       *int32                                       `json:"notificationCount"`
	NotificationPriority    *AndroidNotificationNotificationPriorityEnum `json:"notificationPriority"`
	Sound                   *string                                      `json:"sound"`
	Sticky                  *bool                                        `json:"sticky"`
	Tag                     *string                                      `json:"tag"`
	Ticker                  *string                                      `json:"ticker"`
	Title                   *string                                      `json:"title"`
	TitleLocArgs            []string                                     `json:"titleLocArgs"`
	TitleLocKey             *string                                      `json:"titleLocKey"`
	VibrateTimings          []string                                     `json:"vibrateTimings"`
	Visibility              *AndroidNotificationVisibilityEnum           `json:"visibility"`
}
