package shared



type OperatingSystemsListResponse struct {
    Kind *string `json:"kind,omitempty"`
    OperatingSystems []OperatingSystem `json:"operatingSystems,omitempty"`
    
}

