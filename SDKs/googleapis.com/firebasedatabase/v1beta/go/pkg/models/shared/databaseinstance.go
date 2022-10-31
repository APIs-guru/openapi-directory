package shared




type DatabaseInstanceStateEnum string

const (
    DatabaseInstanceStateEnumLifecycleStateUnspecified DatabaseInstanceStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
DatabaseInstanceStateEnumActive DatabaseInstanceStateEnum = "ACTIVE"
DatabaseInstanceStateEnumDisabled DatabaseInstanceStateEnum = "DISABLED"
DatabaseInstanceStateEnumDeleted DatabaseInstanceStateEnum = "DELETED"
)



type DatabaseInstanceTypeEnum string

const (
    DatabaseInstanceTypeEnumDatabaseInstanceTypeUnspecified DatabaseInstanceTypeEnum = "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
DatabaseInstanceTypeEnumDefaultDatabase DatabaseInstanceTypeEnum = "DEFAULT_DATABASE"
DatabaseInstanceTypeEnumUserDatabase DatabaseInstanceTypeEnum = "USER_DATABASE"
)


type DatabaseInstance struct {
    DatabaseURL *string `json:"databaseUrl,omitempty"`
    Name *string `json:"name,omitempty"`
    Project *string `json:"project,omitempty"`
    State *DatabaseInstanceStateEnum `json:"state,omitempty"`
    Type *DatabaseInstanceTypeEnum `json:"type,omitempty"`
    
}

