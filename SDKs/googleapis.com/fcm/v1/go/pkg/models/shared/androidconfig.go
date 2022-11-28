package shared

type AndroidConfigPriorityEnum string

const (
	AndroidConfigPriorityEnumNormal AndroidConfigPriorityEnum = "NORMAL"
	AndroidConfigPriorityEnumHigh   AndroidConfigPriorityEnum = "HIGH"
)

// AndroidConfig
// Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).
type AndroidConfig struct {
	CollapseKey           *string                    `json:"collapseKey,omitempty"`
	Data                  map[string]string          `json:"data,omitempty"`
	DirectBootOk          *bool                      `json:"directBootOk,omitempty"`
	FcmOptions            *AndroidFcmOptions         `json:"fcmOptions,omitempty"`
	Notification          *AndroidNotification       `json:"notification,omitempty"`
	Priority              *AndroidConfigPriorityEnum `json:"priority,omitempty"`
	RestrictedPackageName *string                    `json:"restrictedPackageName,omitempty"`
	TTL                   *string                    `json:"ttl,omitempty"`
}
