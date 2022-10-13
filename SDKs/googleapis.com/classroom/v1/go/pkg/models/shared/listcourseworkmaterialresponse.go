package shared

type ListCourseWorkMaterialResponse struct {
	CourseWorkMaterial []CourseWorkMaterial `json:"courseWorkMaterial"`
	NextPageToken      *string              `json:"nextPageToken"`
}
