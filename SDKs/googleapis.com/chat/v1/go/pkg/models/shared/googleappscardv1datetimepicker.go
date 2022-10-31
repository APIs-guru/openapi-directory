package shared




type GoogleAppsCardV1DateTimePickerTypeEnum string

const (
    GoogleAppsCardV1DateTimePickerTypeEnumDateAndTime GoogleAppsCardV1DateTimePickerTypeEnum = "DATE_AND_TIME"
GoogleAppsCardV1DateTimePickerTypeEnumDateOnly GoogleAppsCardV1DateTimePickerTypeEnum = "DATE_ONLY"
GoogleAppsCardV1DateTimePickerTypeEnumTimeOnly GoogleAppsCardV1DateTimePickerTypeEnum = "TIME_ONLY"
)


type GoogleAppsCardV1DateTimePicker struct {
    Label *string `json:"label,omitempty"`
    Name *string `json:"name,omitempty"`
    OnChangeAction *GoogleAppsCardV1Action `json:"onChangeAction,omitempty"`
    TimezoneOffsetDate *int32 `json:"timezoneOffsetDate,omitempty"`
    Type *GoogleAppsCardV1DateTimePickerTypeEnum `json:"type,omitempty"`
    ValueMsEpoch *string `json:"valueMsEpoch,omitempty"`
    
}

