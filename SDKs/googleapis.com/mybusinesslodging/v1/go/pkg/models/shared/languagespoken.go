package shared

type LanguageSpokenSpokenExceptionEnum string

const (
	LanguageSpokenSpokenExceptionEnumExceptionUnspecified LanguageSpokenSpokenExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LanguageSpokenSpokenExceptionEnumUnderConstruction    LanguageSpokenSpokenExceptionEnum = "UNDER_CONSTRUCTION"
	LanguageSpokenSpokenExceptionEnumDependentOnSeason    LanguageSpokenSpokenExceptionEnum = "DEPENDENT_ON_SEASON"
	LanguageSpokenSpokenExceptionEnumDependentOnDayOfWeek LanguageSpokenSpokenExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LanguageSpoken struct {
	LanguageCode    *string                            `json:"languageCode,omitempty"`
	Spoken          *bool                              `json:"spoken,omitempty"`
	SpokenException *LanguageSpokenSpokenExceptionEnum `json:"spokenException,omitempty"`
}
