package shared

type AcceleratorAcceleratorTypeEnum string

const (
	AcceleratorAcceleratorTypeEnumAcceleratorTypeUnspecified AcceleratorAcceleratorTypeEnum = "ACCELERATOR_TYPE_UNSPECIFIED"
	AcceleratorAcceleratorTypeEnumCdc                        AcceleratorAcceleratorTypeEnum = "CDC"
	AcceleratorAcceleratorTypeEnumHealthcare                 AcceleratorAcceleratorTypeEnum = "HEALTHCARE"
)

type Accelerator struct {
	AcceleratorType *AcceleratorAcceleratorTypeEnum `json:"acceleratorType"`
}
