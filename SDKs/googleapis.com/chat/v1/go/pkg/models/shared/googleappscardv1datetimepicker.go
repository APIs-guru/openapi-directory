package shared

type GoogleAppsCardV1DateTimePickerTypeEnum string

const (
	GoogleAppsCardV1DateTimePickerTypeEnumDateAndTime GoogleAppsCardV1DateTimePickerTypeEnum = "DATE_AND_TIME"
	GoogleAppsCardV1DateTimePickerTypeEnumDateOnly    GoogleAppsCardV1DateTimePickerTypeEnum = "DATE_ONLY"
	GoogleAppsCardV1DateTimePickerTypeEnumTimeOnly    GoogleAppsCardV1DateTimePickerTypeEnum = "TIME_ONLY"
)

// GoogleAppsCardV1DateTimePicker
// Lets users specify a date, a time, or both a date and a time. Accepts text input from users, but features an interactive date and time selector that helps users enter correctly-formatted dates and times. If users enter a date or time incorrectly, the widget shows an error that prompts users to enter the correct format. Not supported by Chat apps. Support by Chat apps coming soon.
type GoogleAppsCardV1DateTimePicker struct {
	Label              *string                                 `json:"label,omitempty"`
	Name               *string                                 `json:"name,omitempty"`
	OnChangeAction     *GoogleAppsCardV1Action                 `json:"onChangeAction,omitempty"`
	TimezoneOffsetDate *int32                                  `json:"timezoneOffsetDate,omitempty"`
	Type               *GoogleAppsCardV1DateTimePickerTypeEnum `json:"type,omitempty"`
	ValueMsEpoch       *string                                 `json:"valueMsEpoch,omitempty"`
}
