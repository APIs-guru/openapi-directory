package shared



type GeographicDivision struct {
    AlsoKnownAs []string `json:"alsoKnownAs,omitempty"`
    Name *string `json:"name,omitempty"`
    OfficeIndices []int64 `json:"officeIndices,omitempty"`
    
}

