package shared




type UpdateTableBorderPropertiesRequestBorderPositionEnum string

const (
    UpdateTableBorderPropertiesRequestBorderPositionEnumAll UpdateTableBorderPropertiesRequestBorderPositionEnum = "ALL"
UpdateTableBorderPropertiesRequestBorderPositionEnumBottom UpdateTableBorderPropertiesRequestBorderPositionEnum = "BOTTOM"
UpdateTableBorderPropertiesRequestBorderPositionEnumInner UpdateTableBorderPropertiesRequestBorderPositionEnum = "INNER"
UpdateTableBorderPropertiesRequestBorderPositionEnumInnerHorizontal UpdateTableBorderPropertiesRequestBorderPositionEnum = "INNER_HORIZONTAL"
UpdateTableBorderPropertiesRequestBorderPositionEnumInnerVertical UpdateTableBorderPropertiesRequestBorderPositionEnum = "INNER_VERTICAL"
UpdateTableBorderPropertiesRequestBorderPositionEnumLeft UpdateTableBorderPropertiesRequestBorderPositionEnum = "LEFT"
UpdateTableBorderPropertiesRequestBorderPositionEnumOuter UpdateTableBorderPropertiesRequestBorderPositionEnum = "OUTER"
UpdateTableBorderPropertiesRequestBorderPositionEnumRight UpdateTableBorderPropertiesRequestBorderPositionEnum = "RIGHT"
UpdateTableBorderPropertiesRequestBorderPositionEnumTop UpdateTableBorderPropertiesRequestBorderPositionEnum = "TOP"
)


type UpdateTableBorderPropertiesRequest struct {
    BorderPosition *UpdateTableBorderPropertiesRequestBorderPositionEnum `json:"borderPosition,omitempty"`
    Fields *string `json:"fields,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    TableBorderProperties *TableBorderProperties `json:"tableBorderProperties,omitempty"`
    TableRange *TableRange `json:"tableRange,omitempty"`
    
}

