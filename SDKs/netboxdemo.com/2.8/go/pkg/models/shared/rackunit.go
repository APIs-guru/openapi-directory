package shared

type RackUnitFaceLabelEnum string

const (
	RackUnitFaceLabelEnumFront RackUnitFaceLabelEnum = "Front"
	RackUnitFaceLabelEnumRear  RackUnitFaceLabelEnum = "Rear"
)

type RackUnitFaceValueEnum string

const (
	RackUnitFaceValueEnumFront RackUnitFaceValueEnum = "front"
	RackUnitFaceValueEnumRear  RackUnitFaceValueEnum = "rear"
)

type RackUnitFace struct {
	Label RackUnitFaceLabelEnum `json:"label"`
	Value RackUnitFaceValueEnum `json:"value"`
}

type RackUnit struct {
	Device *NestedDevice `json:"device,omitempty"`
	Face   *RackUnitFace `json:"face,omitempty"`
	ID     *int64        `json:"id,omitempty"`
	Name   *string       `json:"name,omitempty"`
}
