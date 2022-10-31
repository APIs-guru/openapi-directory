package shared



type HmacKeysMetadata struct {
    Items []HmacKeyMetadata `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

