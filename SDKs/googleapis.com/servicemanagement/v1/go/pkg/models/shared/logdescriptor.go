package shared

type LogDescriptor struct {
	Description *string           `json:"description,omitempty"`
	DisplayName *string           `json:"displayName,omitempty"`
	Labels      []LabelDescriptor `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
}
