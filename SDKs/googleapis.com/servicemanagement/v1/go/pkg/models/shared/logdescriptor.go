package shared

// LogDescriptor
// A description of a log type. Example in YAML format: - name: library.googleapis.com/activity_history description: The history of borrowing and returning library items. display_name: Activity labels: - key: /customer_id description: Identifier of a library customer
type LogDescriptor struct {
	Description *string           `json:"description,omitempty"`
	DisplayName *string           `json:"displayName,omitempty"`
	Labels      []LabelDescriptor `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
}
