package shared

type ShapeBackgroundFillPropertyStateEnum string

const (
	ShapeBackgroundFillPropertyStateEnumRendered    ShapeBackgroundFillPropertyStateEnum = "RENDERED"
	ShapeBackgroundFillPropertyStateEnumNotRendered ShapeBackgroundFillPropertyStateEnum = "NOT_RENDERED"
	ShapeBackgroundFillPropertyStateEnumInherit     ShapeBackgroundFillPropertyStateEnum = "INHERIT"
)

type ShapeBackgroundFill struct {
	PropertyState *ShapeBackgroundFillPropertyStateEnum `json:"propertyState,omitempty"`
	SolidFill     *SolidFill                            `json:"solidFill,omitempty"`
}
