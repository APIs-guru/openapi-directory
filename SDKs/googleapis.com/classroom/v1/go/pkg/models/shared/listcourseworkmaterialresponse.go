package shared

// ListCourseWorkMaterialResponse
// Response when listing course work material.
type ListCourseWorkMaterialResponse struct {
	CourseWorkMaterial []CourseWorkMaterial `json:"courseWorkMaterial,omitempty"`
	NextPageToken      *string              `json:"nextPageToken,omitempty"`
}
