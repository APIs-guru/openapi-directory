package shared

type GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum string

const (
	GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnumConstraintDefaultUnspecified GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum = "CONSTRAINT_DEFAULT_UNSPECIFIED"
	GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnumAllow                        GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum = "ALLOW"
	GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnumDeny                         GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum = "DENY"
)

type GoogleCloudOrgpolicyV2Constraint struct {
	BooleanConstraint map[string]interface{}                                 `json:"booleanConstraint,omitempty"`
	ConstraintDefault *GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum `json:"constraintDefault,omitempty"`
	Description       *string                                                `json:"description,omitempty"`
	DisplayName       *string                                                `json:"displayName,omitempty"`
	ListConstraint    *GoogleCloudOrgpolicyV2ConstraintListConstraint        `json:"listConstraint,omitempty"`
	Name              *string                                                `json:"name,omitempty"`
}
