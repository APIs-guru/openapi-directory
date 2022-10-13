package shared

type UpdateTableBorderPropertiesRequestBorderPositionEnum string

const (
	UpdateTableBorderPropertiesRequestBorderPositionEnumAll             UpdateTableBorderPropertiesRequestBorderPositionEnum = "ALL"
	UpdateTableBorderPropertiesRequestBorderPositionEnumBottom          UpdateTableBorderPropertiesRequestBorderPositionEnum = "BOTTOM"
	UpdateTableBorderPropertiesRequestBorderPositionEnumInner           UpdateTableBorderPropertiesRequestBorderPositionEnum = "INNER"
	UpdateTableBorderPropertiesRequestBorderPositionEnumInnerHorizontal UpdateTableBorderPropertiesRequestBorderPositionEnum = "INNER_HORIZONTAL"
	UpdateTableBorderPropertiesRequestBorderPositionEnumInnerVertical   UpdateTableBorderPropertiesRequestBorderPositionEnum = "INNER_VERTICAL"
	UpdateTableBorderPropertiesRequestBorderPositionEnumLeft            UpdateTableBorderPropertiesRequestBorderPositionEnum = "LEFT"
	UpdateTableBorderPropertiesRequestBorderPositionEnumOuter           UpdateTableBorderPropertiesRequestBorderPositionEnum = "OUTER"
	UpdateTableBorderPropertiesRequestBorderPositionEnumRight           UpdateTableBorderPropertiesRequestBorderPositionEnum = "RIGHT"
	UpdateTableBorderPropertiesRequestBorderPositionEnumTop             UpdateTableBorderPropertiesRequestBorderPositionEnum = "TOP"
)

type UpdateTableBorderPropertiesRequest struct {
	BorderPosition        *UpdateTableBorderPropertiesRequestBorderPositionEnum `json:"borderPosition"`
	Fields                *string                                               `json:"fields"`
	ObjectID              *string                                               `json:"objectId"`
	TableBorderProperties *TableBorderProperties                                `json:"tableBorderProperties"`
	TableRange            *TableRange                                           `json:"tableRange"`
}
