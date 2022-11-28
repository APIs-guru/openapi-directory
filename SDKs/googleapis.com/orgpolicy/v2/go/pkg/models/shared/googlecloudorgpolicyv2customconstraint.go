package shared

type GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum string

const (
	GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnumActionTypeUnspecified GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum = "ACTION_TYPE_UNSPECIFIED"
	GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnumAllow                 GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum = "ALLOW"
	GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnumDeny                  GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum = "DENY"
)

type GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum string

const (
	GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumMethodTypeUnspecified GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum = "METHOD_TYPE_UNSPECIFIED"
	GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumCreate                GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum = "CREATE"
	GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumUpdate                GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum = "UPDATE"
	GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnumDelete                GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum = "DELETE"
)

// GoogleCloudOrgpolicyV2CustomConstraint
// A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can applied policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
type GoogleCloudOrgpolicyV2CustomConstraint struct {
	ActionType    *GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum   `json:"actionType,omitempty"`
	Condition     *string                                                 `json:"condition,omitempty"`
	Description   *string                                                 `json:"description,omitempty"`
	DisplayName   *string                                                 `json:"displayName,omitempty"`
	MethodTypes   []GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum `json:"methodTypes,omitempty"`
	Name          *string                                                 `json:"name,omitempty"`
	ResourceTypes []string                                                `json:"resourceTypes,omitempty"`
	UpdateTime    *string                                                 `json:"updateTime,omitempty"`
}

// GoogleCloudOrgpolicyV2CustomConstraintInput
// A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can applied policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
type GoogleCloudOrgpolicyV2CustomConstraintInput struct {
	ActionType    *GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum   `json:"actionType,omitempty"`
	Condition     *string                                                 `json:"condition,omitempty"`
	Description   *string                                                 `json:"description,omitempty"`
	DisplayName   *string                                                 `json:"displayName,omitempty"`
	MethodTypes   []GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum `json:"methodTypes,omitempty"`
	Name          *string                                                 `json:"name,omitempty"`
	ResourceTypes []string                                                `json:"resourceTypes,omitempty"`
}
