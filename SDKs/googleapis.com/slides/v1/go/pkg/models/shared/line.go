package shared




type LineLineCategoryEnum string

const (
    LineLineCategoryEnumLineCategoryUnspecified LineLineCategoryEnum = "LINE_CATEGORY_UNSPECIFIED"
LineLineCategoryEnumStraight LineLineCategoryEnum = "STRAIGHT"
LineLineCategoryEnumBent LineLineCategoryEnum = "BENT"
LineLineCategoryEnumCurved LineLineCategoryEnum = "CURVED"
)



type LineLineTypeEnum string

const (
    LineLineTypeEnumTypeUnspecified LineLineTypeEnum = "TYPE_UNSPECIFIED"
LineLineTypeEnumStraightConnector1 LineLineTypeEnum = "STRAIGHT_CONNECTOR_1"
LineLineTypeEnumBentConnector2 LineLineTypeEnum = "BENT_CONNECTOR_2"
LineLineTypeEnumBentConnector3 LineLineTypeEnum = "BENT_CONNECTOR_3"
LineLineTypeEnumBentConnector4 LineLineTypeEnum = "BENT_CONNECTOR_4"
LineLineTypeEnumBentConnector5 LineLineTypeEnum = "BENT_CONNECTOR_5"
LineLineTypeEnumCurvedConnector2 LineLineTypeEnum = "CURVED_CONNECTOR_2"
LineLineTypeEnumCurvedConnector3 LineLineTypeEnum = "CURVED_CONNECTOR_3"
LineLineTypeEnumCurvedConnector4 LineLineTypeEnum = "CURVED_CONNECTOR_4"
LineLineTypeEnumCurvedConnector5 LineLineTypeEnum = "CURVED_CONNECTOR_5"
LineLineTypeEnumStraightLine LineLineTypeEnum = "STRAIGHT_LINE"
)


type Line struct {
    LineCategory *LineLineCategoryEnum `json:"lineCategory,omitempty"`
    LineProperties *LineProperties `json:"lineProperties,omitempty"`
    LineType *LineLineTypeEnum `json:"lineType,omitempty"`
    
}

