package shared

type AcceleratorAcceleratorTypeEnum string

const (
	AcceleratorAcceleratorTypeEnumAcceleratorTypeUnspecified AcceleratorAcceleratorTypeEnum = "ACCELERATOR_TYPE_UNSPECIFIED"
	AcceleratorAcceleratorTypeEnumCdc                        AcceleratorAcceleratorTypeEnum = "CDC"
	AcceleratorAcceleratorTypeEnumHealthcare                 AcceleratorAcceleratorTypeEnum = "HEALTHCARE"
)

// Accelerator
// Identifies Data Fusion accelerators for an instance.
type Accelerator struct {
	AcceleratorType *AcceleratorAcceleratorTypeEnum `json:"acceleratorType,omitempty"`
}
