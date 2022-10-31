package shared



type ListCustomClassesResponse struct {
    CustomClasses []CustomClass `json:"customClasses,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

