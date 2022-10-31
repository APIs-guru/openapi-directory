package shared



type ListCourseAliasesResponse struct {
    Aliases []CourseAlias `json:"aliases,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

