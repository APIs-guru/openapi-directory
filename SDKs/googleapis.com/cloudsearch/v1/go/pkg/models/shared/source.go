package shared

type SourcePredefinedSourceEnum string

const (
	SourcePredefinedSourceEnumNone           SourcePredefinedSourceEnum = "NONE"
	SourcePredefinedSourceEnumQueryHistory   SourcePredefinedSourceEnum = "QUERY_HISTORY"
	SourcePredefinedSourceEnumPerson         SourcePredefinedSourceEnum = "PERSON"
	SourcePredefinedSourceEnumGoogleDrive    SourcePredefinedSourceEnum = "GOOGLE_DRIVE"
	SourcePredefinedSourceEnumGoogleGmail    SourcePredefinedSourceEnum = "GOOGLE_GMAIL"
	SourcePredefinedSourceEnumGoogleSites    SourcePredefinedSourceEnum = "GOOGLE_SITES"
	SourcePredefinedSourceEnumGoogleGroups   SourcePredefinedSourceEnum = "GOOGLE_GROUPS"
	SourcePredefinedSourceEnumGoogleCalendar SourcePredefinedSourceEnum = "GOOGLE_CALENDAR"
	SourcePredefinedSourceEnumGoogleKeep     SourcePredefinedSourceEnum = "GOOGLE_KEEP"
)

type Source struct {
	Name             *string                     `json:"name"`
	PredefinedSource *SourcePredefinedSourceEnum `json:"predefinedSource"`
}
