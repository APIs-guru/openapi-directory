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

type RackUnitFaceFace struct {
	Label RackUnitFaceLabelEnum `json:"label"`
	Value RackUnitFaceValueEnum `json:"value"`
}

type RackUnit struct {
	Device *NestedDevice     `json:"device"`
	Face   *RackUnitFaceFace `json:"face"`
	ID     *int64            `json:"id"`
	Name   *string           `json:"name"`
}
