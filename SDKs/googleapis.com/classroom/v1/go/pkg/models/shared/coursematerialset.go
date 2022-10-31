package shared

type CourseMaterialSet struct {
	Materials []CourseMaterial `json:"materials,omitempty"`
	Title     *string          `json:"title,omitempty"`
}
