package shared

// InstanceTemplateSpec
// InstanceTemplateSpec describes the data an instance should have when created from a template.
type InstanceTemplateSpec struct {
	Spec *InstanceSpec `json:"spec,omitempty"`
}
