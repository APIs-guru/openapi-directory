package shared

type GoogleCloudAssetV1ConstraintConstraintDefaultEnum string

const (
	GoogleCloudAssetV1ConstraintConstraintDefaultEnumConstraintDefaultUnspecified GoogleCloudAssetV1ConstraintConstraintDefaultEnum = "CONSTRAINT_DEFAULT_UNSPECIFIED"
	GoogleCloudAssetV1ConstraintConstraintDefaultEnumAllow                        GoogleCloudAssetV1ConstraintConstraintDefaultEnum = "ALLOW"
	GoogleCloudAssetV1ConstraintConstraintDefaultEnumDeny                         GoogleCloudAssetV1ConstraintConstraintDefaultEnum = "DENY"
)

// GoogleCloudAssetV1Constraint
// The definition of a constraint.
type GoogleCloudAssetV1Constraint struct {
	BooleanConstraint map[string]interface{}                             `json:"booleanConstraint,omitempty"`
	ConstraintDefault *GoogleCloudAssetV1ConstraintConstraintDefaultEnum `json:"constraintDefault,omitempty"`
	Description       *string                                            `json:"description,omitempty"`
	DisplayName       *string                                            `json:"displayName,omitempty"`
	ListConstraint    *GoogleCloudAssetV1ListConstraint                  `json:"listConstraint,omitempty"`
	Name              *string                                            `json:"name,omitempty"`
}
