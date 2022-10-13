package shared

type CourseMaterialSet struct {
	Materials []CourseMaterial `json:"materials"`
	Title     *string          `json:"title"`
}
