package shared



type QueryFiltersLegacy struct {
    Genres []string `json:"Genres,omitempty"`
    OfficialRatings []string `json:"OfficialRatings,omitempty"`
    Tags []string `json:"Tags,omitempty"`
    Years []int32 `json:"Years,omitempty"`
    
}

