package shared



type GoogleLocation struct {
    Location *Location `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    RequestAdminRightsURI *string `json:"requestAdminRightsUri,omitempty"`
    
}

