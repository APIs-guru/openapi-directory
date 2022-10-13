package shared

type ObaIconPositionEnum string

const (
	ObaIconPositionEnumObaIconPositionUnspecified ObaIconPositionEnum = "OBA_ICON_POSITION_UNSPECIFIED"
	ObaIconPositionEnumObaIconPositionUpperRight  ObaIconPositionEnum = "OBA_ICON_POSITION_UPPER_RIGHT"
	ObaIconPositionEnumObaIconPositionUpperLeft   ObaIconPositionEnum = "OBA_ICON_POSITION_UPPER_LEFT"
	ObaIconPositionEnumObaIconPositionLowerRight  ObaIconPositionEnum = "OBA_ICON_POSITION_LOWER_RIGHT"
	ObaIconPositionEnumObaIconPositionLowerLeft   ObaIconPositionEnum = "OBA_ICON_POSITION_LOWER_LEFT"
)

type ObaIcon struct {
	ClickTrackingURL *string              `json:"clickTrackingUrl"`
	Dimensions       *Dimensions          `json:"dimensions"`
	LandingPageURL   *string              `json:"landingPageUrl"`
	Position         *ObaIconPositionEnum `json:"position"`
	Program          *string              `json:"program"`
	ResourceMimeType *string              `json:"resourceMimeType"`
	ResourceURL      *string              `json:"resourceUrl"`
	ViewTrackingURL  *string              `json:"viewTrackingUrl"`
}
