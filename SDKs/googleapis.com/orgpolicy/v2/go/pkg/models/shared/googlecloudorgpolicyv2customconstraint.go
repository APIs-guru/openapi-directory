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

type GoogleCloudOrgpolicyV2CustomConstraint struct {
	ActionType    *GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum   `json:"actionType"`
	Condition     *string                                                 `json:"condition"`
	Description   *string                                                 `json:"description"`
	DisplayName   *string                                                 `json:"displayName"`
	MethodTypes   []GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum `json:"methodTypes"`
	Name          *string                                                 `json:"name"`
	ResourceTypes []string                                                `json:"resourceTypes"`
	UpdateTime    *string                                                 `json:"updateTime"`
}
