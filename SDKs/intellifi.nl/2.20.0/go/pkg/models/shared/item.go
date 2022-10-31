package shared



type Item struct {
    CodeHex *string `json:"code_hex,omitempty"`
    ConfigRequest map[string]interface{} `json:"config_request,omitempty"`
    Custom *interface{} `json:"custom,omitempty"`
    GeoCoords *GeoCoordsReadOnly `json:"geo_coords,omitempty"`
    ID *string `json:"id,omitempty"`
    IsPresent *bool `json:"is_present,omitempty"`
    Label *string `json:"label,omitempty"`
    LocationRequest *string `json:"location_request,omitempty"`
    Metadata map[string]interface{} `json:"metadata,omitempty"`
    MoveCount *int64 `json:"move_count,omitempty"`
    Protocol *ItemProtocolEnum `json:"protocol,omitempty"`
    Sets []string `json:"sets,omitempty"`
    Technology *TechnologyEnum `json:"technology,omitempty"`
    TimeCreated *string `json:"time_created,omitempty"`
    TimeLastPresent *string `json:"time_last_present,omitempty"`
    TimeMoved *string `json:"time_moved,omitempty"`
    TimeUpdated *string `json:"time_updated,omitempty"`
    Type *ItemTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

