package shared



type ShippingsettingsListResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []ShippingSettings `json:"resources,omitempty"`
    
}

