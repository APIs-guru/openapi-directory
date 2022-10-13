package shared

type WarningPriorityEnum string

const (
	WarningPriorityEnumPriorityUnspecified WarningPriorityEnum = "PRIORITY_UNSPECIFIED"
	WarningPriorityEnumInfo                WarningPriorityEnum = "INFO"
	WarningPriorityEnumWarning             WarningPriorityEnum = "WARNING"
	WarningPriorityEnumAlert               WarningPriorityEnum = "ALERT"
)

type Warning struct {
	Priority *WarningPriorityEnum `json:"priority"`
	Text     *string              `json:"text"`
}
