package shared




type ConditionValueRelativeDateEnum string

const (
    ConditionValueRelativeDateEnumRelativeDateUnspecified ConditionValueRelativeDateEnum = "RELATIVE_DATE_UNSPECIFIED"
ConditionValueRelativeDateEnumPastYear ConditionValueRelativeDateEnum = "PAST_YEAR"
ConditionValueRelativeDateEnumPastMonth ConditionValueRelativeDateEnum = "PAST_MONTH"
ConditionValueRelativeDateEnumPastWeek ConditionValueRelativeDateEnum = "PAST_WEEK"
ConditionValueRelativeDateEnumYesterday ConditionValueRelativeDateEnum = "YESTERDAY"
ConditionValueRelativeDateEnumToday ConditionValueRelativeDateEnum = "TODAY"
ConditionValueRelativeDateEnumTomorrow ConditionValueRelativeDateEnum = "TOMORROW"
)


type ConditionValue struct {
    RelativeDate *ConditionValueRelativeDateEnum `json:"relativeDate,omitempty"`
    UserEnteredValue *string `json:"userEnteredValue,omitempty"`
    
}

