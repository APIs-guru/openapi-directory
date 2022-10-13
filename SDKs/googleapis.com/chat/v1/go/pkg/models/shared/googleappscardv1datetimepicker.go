package shared

type GoogleAppsCardV1DateTimePickerTypeEnum string

const (
	GoogleAppsCardV1DateTimePickerTypeEnumDateAndTime GoogleAppsCardV1DateTimePickerTypeEnum = "DATE_AND_TIME"
	GoogleAppsCardV1DateTimePickerTypeEnumDateOnly    GoogleAppsCardV1DateTimePickerTypeEnum = "DATE_ONLY"
	GoogleAppsCardV1DateTimePickerTypeEnumTimeOnly    GoogleAppsCardV1DateTimePickerTypeEnum = "TIME_ONLY"
)

type GoogleAppsCardV1DateTimePicker struct {
	Label              *string                                 `json:"label"`
	Name               *string                                 `json:"name"`
	OnChangeAction     *GoogleAppsCardV1Action                 `json:"onChangeAction"`
	TimezoneOffsetDate *int32                                  `json:"timezoneOffsetDate"`
	Type               *GoogleAppsCardV1DateTimePickerTypeEnum `json:"type"`
	ValueMsEpoch       *string                                 `json:"valueMsEpoch"`
}
