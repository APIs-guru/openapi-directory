package shared

type SecurityMarks struct {
	CanonicalName *string           `json:"canonicalName"`
	Marks         map[string]string `json:"marks"`
	Name          *string           `json:"name"`
}
