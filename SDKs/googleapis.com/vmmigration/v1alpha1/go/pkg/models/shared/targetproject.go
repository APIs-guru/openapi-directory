package shared

// TargetProject
// TargetProject message represents a target Compute Engine project for a migration or a clone.
type TargetProject struct {
	CreateTime  *string `json:"createTime,omitempty"`
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
	Project     *string `json:"project,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
}

// TargetProjectInput
// TargetProject message represents a target Compute Engine project for a migration or a clone.
type TargetProjectInput struct {
	Description *string `json:"description,omitempty"`
	Project     *string `json:"project,omitempty"`
}
