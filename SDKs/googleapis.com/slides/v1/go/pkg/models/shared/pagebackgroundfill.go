package shared

type PageBackgroundFillPropertyStateEnum string

const (
	PageBackgroundFillPropertyStateEnumRendered    PageBackgroundFillPropertyStateEnum = "RENDERED"
	PageBackgroundFillPropertyStateEnumNotRendered PageBackgroundFillPropertyStateEnum = "NOT_RENDERED"
	PageBackgroundFillPropertyStateEnumInherit     PageBackgroundFillPropertyStateEnum = "INHERIT"
)

type PageBackgroundFill struct {
	PropertyState        *PageBackgroundFillPropertyStateEnum `json:"propertyState,omitempty"`
	SolidFill            *SolidFill                           `json:"solidFill,omitempty"`
	StretchedPictureFill *StretchedPictureFill                `json:"stretchedPictureFill,omitempty"`
}
