package shared

type CounterStructuredNameOriginEnum string

const (
	CounterStructuredNameOriginEnumSystem CounterStructuredNameOriginEnum = "SYSTEM"
	CounterStructuredNameOriginEnumUser   CounterStructuredNameOriginEnum = "USER"
)

type CounterStructuredNamePortionEnum string

const (
	CounterStructuredNamePortionEnumAll   CounterStructuredNamePortionEnum = "ALL"
	CounterStructuredNamePortionEnumKey   CounterStructuredNamePortionEnum = "KEY"
	CounterStructuredNamePortionEnumValue CounterStructuredNamePortionEnum = "VALUE"
)

type CounterStructuredName struct {
	ComponentStepName          *string                           `json:"componentStepName"`
	ExecutionStepName          *string                           `json:"executionStepName"`
	InputIndex                 *int32                            `json:"inputIndex"`
	Name                       *string                           `json:"name"`
	Origin                     *CounterStructuredNameOriginEnum  `json:"origin"`
	OriginNamespace            *string                           `json:"originNamespace"`
	OriginalRequestingStepName *string                           `json:"originalRequestingStepName"`
	OriginalStepName           *string                           `json:"originalStepName"`
	Portion                    *CounterStructuredNamePortionEnum `json:"portion"`
	WorkerID                   *string                           `json:"workerId"`
}
