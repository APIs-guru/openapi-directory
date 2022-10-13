package shared

import (
	"time"
)

type DateRangeRelativeDateRangeEnum string

const (
	DateRangeRelativeDateRangeEnumToday           DateRangeRelativeDateRangeEnum = "TODAY"
	DateRangeRelativeDateRangeEnumYesterday       DateRangeRelativeDateRangeEnum = "YESTERDAY"
	DateRangeRelativeDateRangeEnumWeekToDate      DateRangeRelativeDateRangeEnum = "WEEK_TO_DATE"
	DateRangeRelativeDateRangeEnumMonthToDate     DateRangeRelativeDateRangeEnum = "MONTH_TO_DATE"
	DateRangeRelativeDateRangeEnumQuarterToDate   DateRangeRelativeDateRangeEnum = "QUARTER_TO_DATE"
	DateRangeRelativeDateRangeEnumYearToDate      DateRangeRelativeDateRangeEnum = "YEAR_TO_DATE"
	DateRangeRelativeDateRangeEnumPreviousWeek    DateRangeRelativeDateRangeEnum = "PREVIOUS_WEEK"
	DateRangeRelativeDateRangeEnumPreviousMonth   DateRangeRelativeDateRangeEnum = "PREVIOUS_MONTH"
	DateRangeRelativeDateRangeEnumPreviousQuarter DateRangeRelativeDateRangeEnum = "PREVIOUS_QUARTER"
	DateRangeRelativeDateRangeEnumPreviousYear    DateRangeRelativeDateRangeEnum = "PREVIOUS_YEAR"
	DateRangeRelativeDateRangeEnumLast7Days       DateRangeRelativeDateRangeEnum = "LAST_7_DAYS"
	DateRangeRelativeDateRangeEnumLast30Days      DateRangeRelativeDateRangeEnum = "LAST_30_DAYS"
	DateRangeRelativeDateRangeEnumLast90Days      DateRangeRelativeDateRangeEnum = "LAST_90_DAYS"
	DateRangeRelativeDateRangeEnumLast365Days     DateRangeRelativeDateRangeEnum = "LAST_365_DAYS"
	DateRangeRelativeDateRangeEnumLast24Months    DateRangeRelativeDateRangeEnum = "LAST_24_MONTHS"
	DateRangeRelativeDateRangeEnumLast14Days      DateRangeRelativeDateRangeEnum = "LAST_14_DAYS"
	DateRangeRelativeDateRangeEnumLast60Days      DateRangeRelativeDateRangeEnum = "LAST_60_DAYS"
)

type DateRange struct {
	EndDate           *time.Time                      `json:"endDate"`
	Kind              *string                         `json:"kind"`
	RelativeDateRange *DateRangeRelativeDateRangeEnum `json:"relativeDateRange"`
	StartDate         *time.Time                      `json:"startDate"`
}
