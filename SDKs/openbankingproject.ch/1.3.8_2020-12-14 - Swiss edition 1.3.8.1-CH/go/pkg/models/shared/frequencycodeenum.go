package shared

type FrequencyCodeEnum string

const (
	FrequencyCodeEnumDaily           FrequencyCodeEnum = "Daily"
	FrequencyCodeEnumWeekly          FrequencyCodeEnum = "Weekly"
	FrequencyCodeEnumEveryTwoWeeks   FrequencyCodeEnum = "EveryTwoWeeks"
	FrequencyCodeEnumMonthly         FrequencyCodeEnum = "Monthly"
	FrequencyCodeEnumEveryTwoMonths  FrequencyCodeEnum = "EveryTwoMonths"
	FrequencyCodeEnumQuarterly       FrequencyCodeEnum = "Quarterly"
	FrequencyCodeEnumSemiAnnual      FrequencyCodeEnum = "SemiAnnual"
	FrequencyCodeEnumAnnual          FrequencyCodeEnum = "Annual"
	FrequencyCodeEnumMonthlyVariable FrequencyCodeEnum = "MonthlyVariable"
)
