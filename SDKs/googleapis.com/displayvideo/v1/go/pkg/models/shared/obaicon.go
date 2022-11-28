package shared

type ObaIconPositionEnum string

const (
	ObaIconPositionEnumObaIconPositionUnspecified ObaIconPositionEnum = "OBA_ICON_POSITION_UNSPECIFIED"
	ObaIconPositionEnumObaIconPositionUpperRight  ObaIconPositionEnum = "OBA_ICON_POSITION_UPPER_RIGHT"
	ObaIconPositionEnumObaIconPositionUpperLeft   ObaIconPositionEnum = "OBA_ICON_POSITION_UPPER_LEFT"
	ObaIconPositionEnumObaIconPositionLowerRight  ObaIconPositionEnum = "OBA_ICON_POSITION_LOWER_RIGHT"
	ObaIconPositionEnumObaIconPositionLowerLeft   ObaIconPositionEnum = "OBA_ICON_POSITION_LOWER_LEFT"
)

// ObaIcon
// OBA Icon for a Creative
type ObaIcon struct {
	ClickTrackingURL *string              `json:"clickTrackingUrl,omitempty"`
	Dimensions       *Dimensions          `json:"dimensions,omitempty"`
	LandingPageURL   *string              `json:"landingPageUrl,omitempty"`
	Position         *ObaIconPositionEnum `json:"position,omitempty"`
	Program          *string              `json:"program,omitempty"`
	ResourceMimeType *string              `json:"resourceMimeType,omitempty"`
	ResourceURL      *string              `json:"resourceUrl,omitempty"`
	ViewTrackingURL  *string              `json:"viewTrackingUrl,omitempty"`
}
