package shared

type SystemTimezoneViewModel struct {
	BaseUtcOffset              *int32  `json:"baseUtcOffset"`
	DaylightName               *string `json:"daylightName"`
	DisplayName                *string `json:"displayName"`
	StandardName               *string `json:"standardName"`
	SupportsDaylightSavingTime *bool   `json:"supportsDaylightSavingTime"`
	TimezoneIana               *string `json:"timezoneIana"`
	TimezoneID                 *string `json:"timezoneId"`
}
