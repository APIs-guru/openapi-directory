package shared




type PopupWindowPropertiesPositionTypeEnum string

const (
    PopupWindowPropertiesPositionTypeEnumCenter PopupWindowPropertiesPositionTypeEnum = "CENTER"
PopupWindowPropertiesPositionTypeEnumCoordinates PopupWindowPropertiesPositionTypeEnum = "COORDINATES"
)


type PopupWindowProperties struct {
    Dimension *Size `json:"dimension,omitempty"`
    Offset *OffsetPosition `json:"offset,omitempty"`
    PositionType *PopupWindowPropertiesPositionTypeEnum `json:"positionType,omitempty"`
    ShowAddressBar *bool `json:"showAddressBar,omitempty"`
    ShowMenuBar *bool `json:"showMenuBar,omitempty"`
    ShowScrollBar *bool `json:"showScrollBar,omitempty"`
    ShowStatusBar *bool `json:"showStatusBar,omitempty"`
    ShowToolBar *bool `json:"showToolBar,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

