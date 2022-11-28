package shared

type ShadowAlignmentEnum string

const (
	ShadowAlignmentEnumRectanglePositionUnspecified ShadowAlignmentEnum = "RECTANGLE_POSITION_UNSPECIFIED"
	ShadowAlignmentEnumTopLeft                      ShadowAlignmentEnum = "TOP_LEFT"
	ShadowAlignmentEnumTopCenter                    ShadowAlignmentEnum = "TOP_CENTER"
	ShadowAlignmentEnumTopRight                     ShadowAlignmentEnum = "TOP_RIGHT"
	ShadowAlignmentEnumLeftCenter                   ShadowAlignmentEnum = "LEFT_CENTER"
	ShadowAlignmentEnumCenter                       ShadowAlignmentEnum = "CENTER"
	ShadowAlignmentEnumRightCenter                  ShadowAlignmentEnum = "RIGHT_CENTER"
	ShadowAlignmentEnumBottomLeft                   ShadowAlignmentEnum = "BOTTOM_LEFT"
	ShadowAlignmentEnumBottomCenter                 ShadowAlignmentEnum = "BOTTOM_CENTER"
	ShadowAlignmentEnumBottomRight                  ShadowAlignmentEnum = "BOTTOM_RIGHT"
)

type ShadowPropertyStateEnum string

const (
	ShadowPropertyStateEnumRendered    ShadowPropertyStateEnum = "RENDERED"
	ShadowPropertyStateEnumNotRendered ShadowPropertyStateEnum = "NOT_RENDERED"
	ShadowPropertyStateEnumInherit     ShadowPropertyStateEnum = "INHERIT"
)

type ShadowTypeEnum string

const (
	ShadowTypeEnumShadowTypeUnspecified ShadowTypeEnum = "SHADOW_TYPE_UNSPECIFIED"
	ShadowTypeEnumOuter                 ShadowTypeEnum = "OUTER"
)

// Shadow
// The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
type Shadow struct {
	Alignment       *ShadowAlignmentEnum     `json:"alignment,omitempty"`
	Alpha           *float32                 `json:"alpha,omitempty"`
	BlurRadius      *Dimension               `json:"blurRadius,omitempty"`
	Color           *OpaqueColor             `json:"color,omitempty"`
	PropertyState   *ShadowPropertyStateEnum `json:"propertyState,omitempty"`
	RotateWithShape *bool                    `json:"rotateWithShape,omitempty"`
	Transform       *AffineTransform         `json:"transform,omitempty"`
	Type            *ShadowTypeEnum          `json:"type,omitempty"`
}
