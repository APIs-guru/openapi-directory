package shared

type DynamicGroupQueryResourceTypeEnum string

const (
	DynamicGroupQueryResourceTypeEnumResourceTypeUnspecified DynamicGroupQueryResourceTypeEnum = "RESOURCE_TYPE_UNSPECIFIED"
	DynamicGroupQueryResourceTypeEnumUser                    DynamicGroupQueryResourceTypeEnum = "USER"
)

type DynamicGroupQuery struct {
	Query        *string                            `json:"query,omitempty"`
	ResourceType *DynamicGroupQueryResourceTypeEnum `json:"resourceType,omitempty"`
}
