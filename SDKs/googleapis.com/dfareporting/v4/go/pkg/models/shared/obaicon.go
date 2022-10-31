package shared



type ObaIcon struct {
    IconClickThroughURL *string `json:"iconClickThroughUrl,omitempty"`
    IconClickTrackingURL *string `json:"iconClickTrackingUrl,omitempty"`
    IconViewTrackingURL *string `json:"iconViewTrackingUrl,omitempty"`
    Program *string `json:"program,omitempty"`
    ResourceURL *string `json:"resourceUrl,omitempty"`
    Size *Size `json:"size,omitempty"`
    XPosition *string `json:"xPosition,omitempty"`
    YPosition *string `json:"yPosition,omitempty"`
    
}

