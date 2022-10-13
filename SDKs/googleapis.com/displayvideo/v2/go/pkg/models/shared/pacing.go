package shared

type PacingPacingPeriodEnum string

const (
	PacingPacingPeriodEnumPacingPeriodUnspecified PacingPacingPeriodEnum = "PACING_PERIOD_UNSPECIFIED"
	PacingPacingPeriodEnumPacingPeriodDaily       PacingPacingPeriodEnum = "PACING_PERIOD_DAILY"
	PacingPacingPeriodEnumPacingPeriodFlight      PacingPacingPeriodEnum = "PACING_PERIOD_FLIGHT"
)

type PacingPacingTypeEnum string

const (
	PacingPacingTypeEnumPacingTypeUnspecified PacingPacingTypeEnum = "PACING_TYPE_UNSPECIFIED"
	PacingPacingTypeEnumPacingTypeAhead       PacingPacingTypeEnum = "PACING_TYPE_AHEAD"
	PacingPacingTypeEnumPacingTypeAsap        PacingPacingTypeEnum = "PACING_TYPE_ASAP"
	PacingPacingTypeEnumPacingTypeEven        PacingPacingTypeEnum = "PACING_TYPE_EVEN"
)

type Pacing struct {
	DailyMaxImpressions *string                 `json:"dailyMaxImpressions"`
	DailyMaxMicros      *string                 `json:"dailyMaxMicros"`
	PacingPeriod        *PacingPacingPeriodEnum `json:"pacingPeriod"`
	PacingType          *PacingPacingTypeEnum   `json:"pacingType"`
}
