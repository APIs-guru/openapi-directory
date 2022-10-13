package shared

type LanguageSpokenSpokenExceptionEnum string

const (
	LanguageSpokenSpokenExceptionEnumExceptionUnspecified LanguageSpokenSpokenExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LanguageSpokenSpokenExceptionEnumUnderConstruction    LanguageSpokenSpokenExceptionEnum = "UNDER_CONSTRUCTION"
	LanguageSpokenSpokenExceptionEnumDependentOnSeason    LanguageSpokenSpokenExceptionEnum = "DEPENDENT_ON_SEASON"
	LanguageSpokenSpokenExceptionEnumDependentOnDayOfWeek LanguageSpokenSpokenExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LanguageSpoken struct {
	LanguageCode    *string                            `json:"languageCode"`
	Spoken          *bool                              `json:"spoken"`
	SpokenException *LanguageSpokenSpokenExceptionEnum `json:"spokenException"`
}
