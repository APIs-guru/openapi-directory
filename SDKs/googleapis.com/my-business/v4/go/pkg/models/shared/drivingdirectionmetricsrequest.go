package shared

type DrivingDirectionMetricsRequestNumDaysEnum string

const (
	DrivingDirectionMetricsRequestNumDaysEnumSeven  DrivingDirectionMetricsRequestNumDaysEnum = "SEVEN"
	DrivingDirectionMetricsRequestNumDaysEnumThirty DrivingDirectionMetricsRequestNumDaysEnum = "THIRTY"
	DrivingDirectionMetricsRequestNumDaysEnumNinety DrivingDirectionMetricsRequestNumDaysEnum = "NINETY"
)

type DrivingDirectionMetricsRequest struct {
	LanguageCode *string                                    `json:"languageCode,omitempty"`
	NumDays      *DrivingDirectionMetricsRequestNumDaysEnum `json:"numDays,omitempty"`
}
