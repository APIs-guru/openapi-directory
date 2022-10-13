package shared

type ConstraintConstraintDefaultEnum string

const (
	ConstraintConstraintDefaultEnumConstraintDefaultUnspecified ConstraintConstraintDefaultEnum = "CONSTRAINT_DEFAULT_UNSPECIFIED"
	ConstraintConstraintDefaultEnumAllow                        ConstraintConstraintDefaultEnum = "ALLOW"
	ConstraintConstraintDefaultEnumDeny                         ConstraintConstraintDefaultEnum = "DENY"
)

type Constraint struct {
	BooleanConstraint map[string]interface{}           `json:"booleanConstraint"`
	ConstraintDefault *ConstraintConstraintDefaultEnum `json:"constraintDefault"`
	Description       *string                          `json:"description"`
	DisplayName       *string                          `json:"displayName"`
	ListConstraint    *ListConstraint                  `json:"listConstraint"`
	Name              *string                          `json:"name"`
	Version           *int32                           `json:"version"`
}
