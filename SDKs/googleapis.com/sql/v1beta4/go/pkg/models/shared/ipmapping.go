package shared

type IPMappingTypeEnum string

const (
	IPMappingTypeEnumSqlipAddressTypeUnspecified IPMappingTypeEnum = "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
	IPMappingTypeEnumPrimary                     IPMappingTypeEnum = "PRIMARY"
	IPMappingTypeEnumOutgoing                    IPMappingTypeEnum = "OUTGOING"
	IPMappingTypeEnumPrivate                     IPMappingTypeEnum = "PRIVATE"
	IPMappingTypeEnumMigrated1StGen              IPMappingTypeEnum = "MIGRATED_1ST_GEN"
)

// IPMapping
// Database instance IP Mapping.
type IPMapping struct {
	IPAddress    *string            `json:"ipAddress,omitempty"`
	TimeToRetire *string            `json:"timeToRetire,omitempty"`
	Type         *IPMappingTypeEnum `json:"type,omitempty"`
}
