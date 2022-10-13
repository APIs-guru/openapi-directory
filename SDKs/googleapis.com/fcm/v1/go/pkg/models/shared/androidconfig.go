package shared

type AndroidConfigPriorityEnum string

const (
	AndroidConfigPriorityEnumNormal AndroidConfigPriorityEnum = "NORMAL"
	AndroidConfigPriorityEnumHigh   AndroidConfigPriorityEnum = "HIGH"
)

type AndroidConfig struct {
	CollapseKey           *string                    `json:"collapseKey"`
	Data                  map[string]string          `json:"data"`
	DirectBootOk          *bool                      `json:"directBootOk"`
	FcmOptions            *AndroidFcmOptions         `json:"fcmOptions"`
	Notification          *AndroidNotification       `json:"notification"`
	Priority              *AndroidConfigPriorityEnum `json:"priority"`
	RestrictedPackageName *string                    `json:"restrictedPackageName"`
	TTL                   *string                    `json:"ttl"`
}
