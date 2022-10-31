package shared




type TableColumnPropertiesWidthTypeEnum string

const (
    TableColumnPropertiesWidthTypeEnumWidthTypeUnspecified TableColumnPropertiesWidthTypeEnum = "WIDTH_TYPE_UNSPECIFIED"
TableColumnPropertiesWidthTypeEnumEvenlyDistributed TableColumnPropertiesWidthTypeEnum = "EVENLY_DISTRIBUTED"
TableColumnPropertiesWidthTypeEnumFixedWidth TableColumnPropertiesWidthTypeEnum = "FIXED_WIDTH"
)


type TableColumnProperties struct {
    Width *Dimension `json:"width,omitempty"`
    WidthType *TableColumnPropertiesWidthTypeEnum `json:"widthType,omitempty"`
    
}

