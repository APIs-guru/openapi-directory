package shared

type DataLabelPlacementEnum string

const (
	DataLabelPlacementEnumDataLabelPlacementUnspecified DataLabelPlacementEnum = "DATA_LABEL_PLACEMENT_UNSPECIFIED"
	DataLabelPlacementEnumCenter                        DataLabelPlacementEnum = "CENTER"
	DataLabelPlacementEnumLeft                          DataLabelPlacementEnum = "LEFT"
	DataLabelPlacementEnumRight                         DataLabelPlacementEnum = "RIGHT"
	DataLabelPlacementEnumAbove                         DataLabelPlacementEnum = "ABOVE"
	DataLabelPlacementEnumBelow                         DataLabelPlacementEnum = "BELOW"
	DataLabelPlacementEnumInsideEnd                     DataLabelPlacementEnum = "INSIDE_END"
	DataLabelPlacementEnumInsideBase                    DataLabelPlacementEnum = "INSIDE_BASE"
	DataLabelPlacementEnumOutsideEnd                    DataLabelPlacementEnum = "OUTSIDE_END"
)

type DataLabelTypeEnum string

const (
	DataLabelTypeEnumDataLabelTypeUnspecified DataLabelTypeEnum = "DATA_LABEL_TYPE_UNSPECIFIED"
	DataLabelTypeEnumNone                     DataLabelTypeEnum = "NONE"
	DataLabelTypeEnumData                     DataLabelTypeEnum = "DATA"
	DataLabelTypeEnumCustom                   DataLabelTypeEnum = "CUSTOM"
)

type DataLabel struct {
	CustomLabelData *ChartData              `json:"customLabelData,omitempty"`
	Placement       *DataLabelPlacementEnum `json:"placement,omitempty"`
	TextFormat      *TextFormat             `json:"textFormat,omitempty"`
	Type            *DataLabelTypeEnum      `json:"type,omitempty"`
}
