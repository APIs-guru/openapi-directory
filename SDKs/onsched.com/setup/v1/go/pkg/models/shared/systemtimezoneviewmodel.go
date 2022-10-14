package shared

type SystemTimezoneViewModel struct {
	BaseUtcOffset              *int32  `json:"baseUtcOffset,omitempty"`
	DaylightName               *string `json:"daylightName,omitempty"`
	DisplayName                *string `json:"displayName,omitempty"`
	StandardName               *string `json:"standardName,omitempty"`
	SupportsDaylightSavingTime *bool   `json:"supportsDaylightSavingTime,omitempty"`
	TimezoneIana               *string `json:"timezoneIana,omitempty"`
	TimezoneID                 *string `json:"timezoneId,omitempty"`
}
