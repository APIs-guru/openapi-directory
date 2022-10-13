package shared

type LogDescriptor struct {
	Description *string           `json:"description"`
	DisplayName *string           `json:"displayName"`
	Labels      []LabelDescriptor `json:"labels"`
	Name        *string           `json:"name"`
}
