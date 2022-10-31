package shared




type AcceleratorAcceleratorTypeEnum string

const (
    AcceleratorAcceleratorTypeEnumAcceleratorTypeUnspecified AcceleratorAcceleratorTypeEnum = "ACCELERATOR_TYPE_UNSPECIFIED"
AcceleratorAcceleratorTypeEnumCdc AcceleratorAcceleratorTypeEnum = "CDC"
AcceleratorAcceleratorTypeEnumHealthcare AcceleratorAcceleratorTypeEnum = "HEALTHCARE"
AcceleratorAcceleratorTypeEnumCcaiInsights AcceleratorAcceleratorTypeEnum = "CCAI_INSIGHTS"
)



type AcceleratorStateEnum string

const (
    AcceleratorStateEnumStateUnspecified AcceleratorStateEnum = "STATE_UNSPECIFIED"
AcceleratorStateEnumEnabled AcceleratorStateEnum = "ENABLED"
AcceleratorStateEnumDisabled AcceleratorStateEnum = "DISABLED"
AcceleratorStateEnumUnknown AcceleratorStateEnum = "UNKNOWN"
)


type Accelerator struct {
    AcceleratorType *AcceleratorAcceleratorTypeEnum `json:"acceleratorType,omitempty"`
    State *AcceleratorStateEnum `json:"state,omitempty"`
    
}

