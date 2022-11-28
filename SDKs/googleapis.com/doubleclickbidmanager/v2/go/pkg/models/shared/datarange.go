package shared

type DataRangeRangeEnum string

const (
	DataRangeRangeEnumRangeUnspecified DataRangeRangeEnum = "RANGE_UNSPECIFIED"
	DataRangeRangeEnumCustomDates      DataRangeRangeEnum = "CUSTOM_DATES"
	DataRangeRangeEnumCurrentDay       DataRangeRangeEnum = "CURRENT_DAY"
	DataRangeRangeEnumPreviousDay      DataRangeRangeEnum = "PREVIOUS_DAY"
	DataRangeRangeEnumWeekToDate       DataRangeRangeEnum = "WEEK_TO_DATE"
	DataRangeRangeEnumMonthToDate      DataRangeRangeEnum = "MONTH_TO_DATE"
	DataRangeRangeEnumQuarterToDate    DataRangeRangeEnum = "QUARTER_TO_DATE"
	DataRangeRangeEnumYearToDate       DataRangeRangeEnum = "YEAR_TO_DATE"
	DataRangeRangeEnumPreviousWeek     DataRangeRangeEnum = "PREVIOUS_WEEK"
	DataRangeRangeEnumPreviousMonth    DataRangeRangeEnum = "PREVIOUS_MONTH"
	DataRangeRangeEnumPreviousQuarter  DataRangeRangeEnum = "PREVIOUS_QUARTER"
	DataRangeRangeEnumPreviousYear     DataRangeRangeEnum = "PREVIOUS_YEAR"
	DataRangeRangeEnumLast7Days        DataRangeRangeEnum = "LAST_7_DAYS"
	DataRangeRangeEnumLast30Days       DataRangeRangeEnum = "LAST_30_DAYS"
	DataRangeRangeEnumLast90Days       DataRangeRangeEnum = "LAST_90_DAYS"
	DataRangeRangeEnumLast365Days      DataRangeRangeEnum = "LAST_365_DAYS"
	DataRangeRangeEnumAllTime          DataRangeRangeEnum = "ALL_TIME"
	DataRangeRangeEnumLast14Days       DataRangeRangeEnum = "LAST_14_DAYS"
	DataRangeRangeEnumLast60Days       DataRangeRangeEnum = "LAST_60_DAYS"
)

// DataRange
// Report data range.
type DataRange struct {
	CustomEndDate   *Date               `json:"customEndDate,omitempty"`
	CustomStartDate *Date               `json:"customStartDate,omitempty"`
	Range           *DataRangeRangeEnum `json:"range,omitempty"`
}
