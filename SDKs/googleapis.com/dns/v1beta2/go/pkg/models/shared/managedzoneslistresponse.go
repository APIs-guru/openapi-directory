package shared



type ManagedZonesListResponse struct {
    Header *ResponseHeader `json:"header,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ManagedZones []ManagedZone `json:"managedZones,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

