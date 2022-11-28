package shared

type GoogleCloudAssetV1CustomConstraintActionTypeEnum string

const (
	GoogleCloudAssetV1CustomConstraintActionTypeEnumActionTypeUnspecified GoogleCloudAssetV1CustomConstraintActionTypeEnum = "ACTION_TYPE_UNSPECIFIED"
	GoogleCloudAssetV1CustomConstraintActionTypeEnumAllow                 GoogleCloudAssetV1CustomConstraintActionTypeEnum = "ALLOW"
	GoogleCloudAssetV1CustomConstraintActionTypeEnumDeny                  GoogleCloudAssetV1CustomConstraintActionTypeEnum = "DENY"
)

type GoogleCloudAssetV1CustomConstraintMethodTypesEnum string

const (
	GoogleCloudAssetV1CustomConstraintMethodTypesEnumMethodTypeUnspecified GoogleCloudAssetV1CustomConstraintMethodTypesEnum = "METHOD_TYPE_UNSPECIFIED"
	GoogleCloudAssetV1CustomConstraintMethodTypesEnumCreate                GoogleCloudAssetV1CustomConstraintMethodTypesEnum = "CREATE"
	GoogleCloudAssetV1CustomConstraintMethodTypesEnumUpdate                GoogleCloudAssetV1CustomConstraintMethodTypesEnum = "UPDATE"
	GoogleCloudAssetV1CustomConstraintMethodTypesEnumDelete                GoogleCloudAssetV1CustomConstraintMethodTypesEnum = "DELETE"
)

// GoogleCloudAssetV1CustomConstraint
// The definition of a custom constraint.
type GoogleCloudAssetV1CustomConstraint struct {
	ActionType    *GoogleCloudAssetV1CustomConstraintActionTypeEnum   `json:"actionType,omitempty"`
	Condition     *string                                             `json:"condition,omitempty"`
	Description   *string                                             `json:"description,omitempty"`
	DisplayName   *string                                             `json:"displayName,omitempty"`
	MethodTypes   []GoogleCloudAssetV1CustomConstraintMethodTypesEnum `json:"methodTypes,omitempty"`
	Name          *string                                             `json:"name,omitempty"`
	ResourceTypes []string                                            `json:"resourceTypes,omitempty"`
}
