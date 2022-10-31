package shared



type ListCourseWorkMaterialResponse struct {
    CourseWorkMaterial []CourseWorkMaterial `json:"courseWorkMaterial,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

