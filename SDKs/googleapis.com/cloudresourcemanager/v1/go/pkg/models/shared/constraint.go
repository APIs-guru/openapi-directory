package shared




type ConstraintConstraintDefaultEnum string

const (
    ConstraintConstraintDefaultEnumConstraintDefaultUnspecified ConstraintConstraintDefaultEnum = "CONSTRAINT_DEFAULT_UNSPECIFIED"
ConstraintConstraintDefaultEnumAllow ConstraintConstraintDefaultEnum = "ALLOW"
ConstraintConstraintDefaultEnumDeny ConstraintConstraintDefaultEnum = "DENY"
)


type Constraint struct {
    BooleanConstraint map[string]interface{} `json:"booleanConstraint,omitempty"`
    ConstraintDefault *ConstraintConstraintDefaultEnum `json:"constraintDefault,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    ListConstraint *ListConstraint `json:"listConstraint,omitempty"`
    Name *string `json:"name,omitempty"`
    Version *int32 `json:"version,omitempty"`
    
}

