package shared




type LinePropertiesDashStyleEnum string

const (
    LinePropertiesDashStyleEnumDashStyleUnspecified LinePropertiesDashStyleEnum = "DASH_STYLE_UNSPECIFIED"
LinePropertiesDashStyleEnumSolid LinePropertiesDashStyleEnum = "SOLID"
LinePropertiesDashStyleEnumDot LinePropertiesDashStyleEnum = "DOT"
LinePropertiesDashStyleEnumDash LinePropertiesDashStyleEnum = "DASH"
LinePropertiesDashStyleEnumDashDot LinePropertiesDashStyleEnum = "DASH_DOT"
LinePropertiesDashStyleEnumLongDash LinePropertiesDashStyleEnum = "LONG_DASH"
LinePropertiesDashStyleEnumLongDashDot LinePropertiesDashStyleEnum = "LONG_DASH_DOT"
)



type LinePropertiesEndArrowEnum string

const (
    LinePropertiesEndArrowEnumArrowStyleUnspecified LinePropertiesEndArrowEnum = "ARROW_STYLE_UNSPECIFIED"
LinePropertiesEndArrowEnumNone LinePropertiesEndArrowEnum = "NONE"
LinePropertiesEndArrowEnumStealthArrow LinePropertiesEndArrowEnum = "STEALTH_ARROW"
LinePropertiesEndArrowEnumFillArrow LinePropertiesEndArrowEnum = "FILL_ARROW"
LinePropertiesEndArrowEnumFillCircle LinePropertiesEndArrowEnum = "FILL_CIRCLE"
LinePropertiesEndArrowEnumFillSquare LinePropertiesEndArrowEnum = "FILL_SQUARE"
LinePropertiesEndArrowEnumFillDiamond LinePropertiesEndArrowEnum = "FILL_DIAMOND"
LinePropertiesEndArrowEnumOpenArrow LinePropertiesEndArrowEnum = "OPEN_ARROW"
LinePropertiesEndArrowEnumOpenCircle LinePropertiesEndArrowEnum = "OPEN_CIRCLE"
LinePropertiesEndArrowEnumOpenSquare LinePropertiesEndArrowEnum = "OPEN_SQUARE"
LinePropertiesEndArrowEnumOpenDiamond LinePropertiesEndArrowEnum = "OPEN_DIAMOND"
)



type LinePropertiesStartArrowEnum string

const (
    LinePropertiesStartArrowEnumArrowStyleUnspecified LinePropertiesStartArrowEnum = "ARROW_STYLE_UNSPECIFIED"
LinePropertiesStartArrowEnumNone LinePropertiesStartArrowEnum = "NONE"
LinePropertiesStartArrowEnumStealthArrow LinePropertiesStartArrowEnum = "STEALTH_ARROW"
LinePropertiesStartArrowEnumFillArrow LinePropertiesStartArrowEnum = "FILL_ARROW"
LinePropertiesStartArrowEnumFillCircle LinePropertiesStartArrowEnum = "FILL_CIRCLE"
LinePropertiesStartArrowEnumFillSquare LinePropertiesStartArrowEnum = "FILL_SQUARE"
LinePropertiesStartArrowEnumFillDiamond LinePropertiesStartArrowEnum = "FILL_DIAMOND"
LinePropertiesStartArrowEnumOpenArrow LinePropertiesStartArrowEnum = "OPEN_ARROW"
LinePropertiesStartArrowEnumOpenCircle LinePropertiesStartArrowEnum = "OPEN_CIRCLE"
LinePropertiesStartArrowEnumOpenSquare LinePropertiesStartArrowEnum = "OPEN_SQUARE"
LinePropertiesStartArrowEnumOpenDiamond LinePropertiesStartArrowEnum = "OPEN_DIAMOND"
)


type LineProperties struct {
    DashStyle *LinePropertiesDashStyleEnum `json:"dashStyle,omitempty"`
    EndArrow *LinePropertiesEndArrowEnum `json:"endArrow,omitempty"`
    EndConnection *LineConnection `json:"endConnection,omitempty"`
    LineFill *LineFill `json:"lineFill,omitempty"`
    Link *Link `json:"link,omitempty"`
    StartArrow *LinePropertiesStartArrowEnum `json:"startArrow,omitempty"`
    StartConnection *LineConnection `json:"startConnection,omitempty"`
    Weight *Dimension `json:"weight,omitempty"`
    
}

