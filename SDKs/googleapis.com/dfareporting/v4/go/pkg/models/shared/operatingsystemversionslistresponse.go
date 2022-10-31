package shared



type OperatingSystemVersionsListResponse struct {
    Kind *string `json:"kind,omitempty"`
    OperatingSystemVersions []OperatingSystemVersion `json:"operatingSystemVersions,omitempty"`
    
}

