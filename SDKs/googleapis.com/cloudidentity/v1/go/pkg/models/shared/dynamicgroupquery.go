package shared

type DynamicGroupQueryResourceTypeEnum string

const (
	DynamicGroupQueryResourceTypeEnumResourceTypeUnspecified DynamicGroupQueryResourceTypeEnum = "RESOURCE_TYPE_UNSPECIFIED"
	DynamicGroupQueryResourceTypeEnumUser                    DynamicGroupQueryResourceTypeEnum = "USER"
)

// DynamicGroupQuery
// Defines a query on a resource.
type DynamicGroupQuery struct {
	Query        *string                            `json:"query,omitempty"`
	ResourceType *DynamicGroupQueryResourceTypeEnum `json:"resourceType,omitempty"`
}
