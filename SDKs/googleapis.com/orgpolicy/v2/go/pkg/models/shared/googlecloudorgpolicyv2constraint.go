package shared

type GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum string

const (
	GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnumConstraintDefaultUnspecified GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum = "CONSTRAINT_DEFAULT_UNSPECIFIED"
	GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnumAllow                        GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum = "ALLOW"
	GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnumDeny                         GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum = "DENY"
)

type GoogleCloudOrgpolicyV2Constraint struct {
	BooleanConstraint map[string]interface{}                                 `json:"booleanConstraint"`
	ConstraintDefault *GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum `json:"constraintDefault"`
	Description       *string                                                `json:"description"`
	DisplayName       *string                                                `json:"displayName"`
	ListConstraint    *GoogleCloudOrgpolicyV2ConstraintListConstraint        `json:"listConstraint"`
	Name              *string                                                `json:"name"`
}
