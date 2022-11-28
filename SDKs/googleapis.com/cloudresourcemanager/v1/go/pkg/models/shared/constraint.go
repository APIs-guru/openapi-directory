package shared

type ConstraintConstraintDefaultEnum string

const (
	ConstraintConstraintDefaultEnumConstraintDefaultUnspecified ConstraintConstraintDefaultEnum = "CONSTRAINT_DEFAULT_UNSPECIFIED"
	ConstraintConstraintDefaultEnumAllow                        ConstraintConstraintDefaultEnum = "ALLOW"
	ConstraintConstraintDefaultEnumDeny                         ConstraintConstraintDefaultEnum = "DENY"
)

// Constraint
// A `Constraint` describes a way in which a resource's configuration can be restricted. For example, it controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for `Constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about [Policies](/resource-manager/reference/rest/v1/Policy). `Constraints` have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a `Policy` being defined or inherited for the resource in question.
type Constraint struct {
	BooleanConstraint map[string]interface{}           `json:"booleanConstraint,omitempty"`
	ConstraintDefault *ConstraintConstraintDefaultEnum `json:"constraintDefault,omitempty"`
	Description       *string                          `json:"description,omitempty"`
	DisplayName       *string                          `json:"displayName,omitempty"`
	ListConstraint    *ListConstraint                  `json:"listConstraint,omitempty"`
	Name              *string                          `json:"name,omitempty"`
	Version           *int32                           `json:"version,omitempty"`
}
