package shared

// AssignmentGroupLabel
// Represents a group of VM intances that can be identified as having all these labels, for example "env=prod and app=web".
type AssignmentGroupLabel struct {
	Labels map[string]string `json:"labels,omitempty"`
}
