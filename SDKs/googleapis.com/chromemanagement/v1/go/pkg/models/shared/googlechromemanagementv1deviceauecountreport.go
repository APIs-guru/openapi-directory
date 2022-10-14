package shared

type GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum string

const (
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumMonthUnspecified GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "MONTH_UNSPECIFIED"
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumJanuary          GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "JANUARY"
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumFebruary         GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "FEBRUARY"
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumMarch            GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "MARCH"
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumApril            GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "APRIL"
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumMay              GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "MAY"
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumJune             GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "JUNE"
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumJuly             GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "JULY"
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumAugust           GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "AUGUST"
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumSeptember        GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "SEPTEMBER"
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumOctober          GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "OCTOBER"
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumNovember         GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "NOVEMBER"
	GoogleChromeManagementV1DeviceAueCountReportAueMonthEnumDecember         GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = "DECEMBER"
)

type GoogleChromeManagementV1DeviceAueCountReport struct {
	AueMonth *GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum `json:"aueMonth,omitempty"`
	AueYear  *string                                                   `json:"aueYear,omitempty"`
	Count    *string                                                   `json:"count,omitempty"`
	Expired  *bool                                                     `json:"expired,omitempty"`
	Model    *string                                                   `json:"model,omitempty"`
}
