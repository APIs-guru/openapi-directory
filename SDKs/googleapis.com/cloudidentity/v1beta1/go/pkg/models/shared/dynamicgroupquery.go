package shared

type DynamicGroupQueryResourceTypeEnum string

const (
	DynamicGroupQueryResourceTypeEnumResourceTypeUnspecified DynamicGroupQueryResourceTypeEnum = "RESOURCE_TYPE_UNSPECIFIED"
	DynamicGroupQueryResourceTypeEnumUser                    DynamicGroupQueryResourceTypeEnum = "USER"
)

type DynamicGroupQuery struct {
	Query        *string                            `json:"query"`
	ResourceType *DynamicGroupQueryResourceTypeEnum `json:"resourceType"`
}
