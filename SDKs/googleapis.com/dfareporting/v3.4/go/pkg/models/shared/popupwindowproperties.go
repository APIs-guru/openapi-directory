package shared

type PopupWindowPropertiesPositionTypeEnum string

const (
	PopupWindowPropertiesPositionTypeEnumCenter      PopupWindowPropertiesPositionTypeEnum = "CENTER"
	PopupWindowPropertiesPositionTypeEnumCoordinates PopupWindowPropertiesPositionTypeEnum = "COORDINATES"
)

type PopupWindowProperties struct {
	Dimension      *Size                                  `json:"dimension"`
	Offset         *OffsetPosition                        `json:"offset"`
	PositionType   *PopupWindowPropertiesPositionTypeEnum `json:"positionType"`
	ShowAddressBar *bool                                  `json:"showAddressBar"`
	ShowMenuBar    *bool                                  `json:"showMenuBar"`
	ShowScrollBar  *bool                                  `json:"showScrollBar"`
	ShowStatusBar  *bool                                  `json:"showStatusBar"`
	ShowToolBar    *bool                                  `json:"showToolBar"`
	Title          *string                                `json:"title"`
}
