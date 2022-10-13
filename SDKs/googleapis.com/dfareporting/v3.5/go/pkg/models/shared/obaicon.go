package shared

type ObaIcon struct {
	IconClickThroughURL  *string `json:"iconClickThroughUrl"`
	IconClickTrackingURL *string `json:"iconClickTrackingUrl"`
	IconViewTrackingURL  *string `json:"iconViewTrackingUrl"`
	Program              *string `json:"program"`
	ResourceURL          *string `json:"resourceUrl"`
	Size                 *Size   `json:"size"`
	XPosition            *string `json:"xPosition"`
	YPosition            *string `json:"yPosition"`
}
