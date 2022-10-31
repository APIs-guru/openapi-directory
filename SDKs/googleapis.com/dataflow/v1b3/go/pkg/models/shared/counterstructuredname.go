package shared




type CounterStructuredNameOriginEnum string

const (
    CounterStructuredNameOriginEnumSystem CounterStructuredNameOriginEnum = "SYSTEM"
CounterStructuredNameOriginEnumUser CounterStructuredNameOriginEnum = "USER"
)



type CounterStructuredNamePortionEnum string

const (
    CounterStructuredNamePortionEnumAll CounterStructuredNamePortionEnum = "ALL"
CounterStructuredNamePortionEnumKey CounterStructuredNamePortionEnum = "KEY"
CounterStructuredNamePortionEnumValue CounterStructuredNamePortionEnum = "VALUE"
)


type CounterStructuredName struct {
    ComponentStepName *string `json:"componentStepName,omitempty"`
    ExecutionStepName *string `json:"executionStepName,omitempty"`
    InputIndex *int32 `json:"inputIndex,omitempty"`
    Name *string `json:"name,omitempty"`
    Origin *CounterStructuredNameOriginEnum `json:"origin,omitempty"`
    OriginNamespace *string `json:"originNamespace,omitempty"`
    OriginalRequestingStepName *string `json:"originalRequestingStepName,omitempty"`
    OriginalStepName *string `json:"originalStepName,omitempty"`
    Portion *CounterStructuredNamePortionEnum `json:"portion,omitempty"`
    WorkerID *string `json:"workerId,omitempty"`
    
}

