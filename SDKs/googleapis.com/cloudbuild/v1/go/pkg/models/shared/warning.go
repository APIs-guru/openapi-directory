package shared

type WarningPriorityEnum string

const (
	WarningPriorityEnumPriorityUnspecified WarningPriorityEnum = "PRIORITY_UNSPECIFIED"
	WarningPriorityEnumInfo                WarningPriorityEnum = "INFO"
	WarningPriorityEnumWarning             WarningPriorityEnum = "WARNING"
	WarningPriorityEnumAlert               WarningPriorityEnum = "ALERT"
)

// Warning
// A non-fatal problem encountered during the execution of the build.
type Warning struct {
	Priority *WarningPriorityEnum `json:"priority,omitempty"`
	Text     *string              `json:"text,omitempty"`
}
