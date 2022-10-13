package shared

type PageBackgroundFillPropertyStateEnum string

const (
	PageBackgroundFillPropertyStateEnumRendered    PageBackgroundFillPropertyStateEnum = "RENDERED"
	PageBackgroundFillPropertyStateEnumNotRendered PageBackgroundFillPropertyStateEnum = "NOT_RENDERED"
	PageBackgroundFillPropertyStateEnumInherit     PageBackgroundFillPropertyStateEnum = "INHERIT"
)

type PageBackgroundFill struct {
	PropertyState        *PageBackgroundFillPropertyStateEnum `json:"propertyState"`
	SolidFill            *SolidFill                           `json:"solidFill"`
	StretchedPictureFill *StretchedPictureFill                `json:"stretchedPictureFill"`
}
