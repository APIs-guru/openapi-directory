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

// Pacing
// Settings that control the rate at which a budget is spent.
type Pacing struct {
	DailyMaxImpressions *string                 `json:"dailyMaxImpressions,omitempty"`
	DailyMaxMicros      *string                 `json:"dailyMaxMicros,omitempty"`
	PacingPeriod        *PacingPacingPeriodEnum `json:"pacingPeriod,omitempty"`
	PacingType          *PacingPacingTypeEnum   `json:"pacingType,omitempty"`
}
