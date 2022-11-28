package shared

// CourseMaterialSet
// A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.
type CourseMaterialSet struct {
	Materials []CourseMaterial `json:"materials,omitempty"`
	Title     *string          `json:"title,omitempty"`
}
