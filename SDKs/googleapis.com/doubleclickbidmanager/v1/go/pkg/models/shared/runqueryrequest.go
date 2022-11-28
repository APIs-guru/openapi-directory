package shared

type RunQueryRequestDataRangeEnum string

const (
	RunQueryRequestDataRangeEnumCustomDates       RunQueryRequestDataRangeEnum = "CUSTOM_DATES"
	RunQueryRequestDataRangeEnumCurrentDay        RunQueryRequestDataRangeEnum = "CURRENT_DAY"
	RunQueryRequestDataRangeEnumPreviousDay       RunQueryRequestDataRangeEnum = "PREVIOUS_DAY"
	RunQueryRequestDataRangeEnumWeekToDate        RunQueryRequestDataRangeEnum = "WEEK_TO_DATE"
	RunQueryRequestDataRangeEnumMonthToDate       RunQueryRequestDataRangeEnum = "MONTH_TO_DATE"
	RunQueryRequestDataRangeEnumQuarterToDate     RunQueryRequestDataRangeEnum = "QUARTER_TO_DATE"
	RunQueryRequestDataRangeEnumYearToDate        RunQueryRequestDataRangeEnum = "YEAR_TO_DATE"
	RunQueryRequestDataRangeEnumPreviousWeek      RunQueryRequestDataRangeEnum = "PREVIOUS_WEEK"
	RunQueryRequestDataRangeEnumPreviousHalfMonth RunQueryRequestDataRangeEnum = "PREVIOUS_HALF_MONTH"
	RunQueryRequestDataRangeEnumPreviousMonth     RunQueryRequestDataRangeEnum = "PREVIOUS_MONTH"
	RunQueryRequestDataRangeEnumPreviousQuarter   RunQueryRequestDataRangeEnum = "PREVIOUS_QUARTER"
	RunQueryRequestDataRangeEnumPreviousYear      RunQueryRequestDataRangeEnum = "PREVIOUS_YEAR"
	RunQueryRequestDataRangeEnumLast7Days         RunQueryRequestDataRangeEnum = "LAST_7_DAYS"
	RunQueryRequestDataRangeEnumLast30Days        RunQueryRequestDataRangeEnum = "LAST_30_DAYS"
	RunQueryRequestDataRangeEnumLast90Days        RunQueryRequestDataRangeEnum = "LAST_90_DAYS"
	RunQueryRequestDataRangeEnumLast365Days       RunQueryRequestDataRangeEnum = "LAST_365_DAYS"
	RunQueryRequestDataRangeEnumAllTime           RunQueryRequestDataRangeEnum = "ALL_TIME"
	RunQueryRequestDataRangeEnumLast14Days        RunQueryRequestDataRangeEnum = "LAST_14_DAYS"
	RunQueryRequestDataRangeEnumTypeNotSupported  RunQueryRequestDataRangeEnum = "TYPE_NOT_SUPPORTED"
	RunQueryRequestDataRangeEnumLast60Days        RunQueryRequestDataRangeEnum = "LAST_60_DAYS"
)

// RunQueryRequest
// Request to run a stored query to generate a report.
type RunQueryRequest struct {
	DataRange             *RunQueryRequestDataRangeEnum `json:"dataRange,omitempty"`
	ReportDataEndTimeMs   *string                       `json:"reportDataEndTimeMs,omitempty"`
	ReportDataStartTimeMs *string                       `json:"reportDataStartTimeMs,omitempty"`
	TimezoneCode          *string                       `json:"timezoneCode,omitempty"`
}
