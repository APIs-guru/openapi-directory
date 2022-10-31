package shared




type FlagAppliesToEnum string

const (
    FlagAppliesToEnumSQLDatabaseVersionUnspecified FlagAppliesToEnum = "SQL_DATABASE_VERSION_UNSPECIFIED"
FlagAppliesToEnumMysql51 FlagAppliesToEnum = "MYSQL_5_1"
FlagAppliesToEnumMysql55 FlagAppliesToEnum = "MYSQL_5_5"
FlagAppliesToEnumMysql56 FlagAppliesToEnum = "MYSQL_5_6"
FlagAppliesToEnumMysql57 FlagAppliesToEnum = "MYSQL_5_7"
FlagAppliesToEnumSqlserver2017Standard FlagAppliesToEnum = "SQLSERVER_2017_STANDARD"
FlagAppliesToEnumSqlserver2017Enterprise FlagAppliesToEnum = "SQLSERVER_2017_ENTERPRISE"
FlagAppliesToEnumSqlserver2017Express FlagAppliesToEnum = "SQLSERVER_2017_EXPRESS"
FlagAppliesToEnumSqlserver2017Web FlagAppliesToEnum = "SQLSERVER_2017_WEB"
FlagAppliesToEnumPostgres96 FlagAppliesToEnum = "POSTGRES_9_6"
FlagAppliesToEnumPostgres10 FlagAppliesToEnum = "POSTGRES_10"
FlagAppliesToEnumPostgres11 FlagAppliesToEnum = "POSTGRES_11"
FlagAppliesToEnumPostgres12 FlagAppliesToEnum = "POSTGRES_12"
FlagAppliesToEnumPostgres13 FlagAppliesToEnum = "POSTGRES_13"
FlagAppliesToEnumPostgres14 FlagAppliesToEnum = "POSTGRES_14"
FlagAppliesToEnumMysql80 FlagAppliesToEnum = "MYSQL_8_0"
FlagAppliesToEnumMysql8018 FlagAppliesToEnum = "MYSQL_8_0_18"
FlagAppliesToEnumMysql8026 FlagAppliesToEnum = "MYSQL_8_0_26"
FlagAppliesToEnumMysql8027 FlagAppliesToEnum = "MYSQL_8_0_27"
FlagAppliesToEnumMysql8028 FlagAppliesToEnum = "MYSQL_8_0_28"
FlagAppliesToEnumMysql8029 FlagAppliesToEnum = "MYSQL_8_0_29"
FlagAppliesToEnumMysql8030 FlagAppliesToEnum = "MYSQL_8_0_30"
FlagAppliesToEnumSqlserver2019Standard FlagAppliesToEnum = "SQLSERVER_2019_STANDARD"
FlagAppliesToEnumSqlserver2019Enterprise FlagAppliesToEnum = "SQLSERVER_2019_ENTERPRISE"
FlagAppliesToEnumSqlserver2019Express FlagAppliesToEnum = "SQLSERVER_2019_EXPRESS"
FlagAppliesToEnumSqlserver2019Web FlagAppliesToEnum = "SQLSERVER_2019_WEB"
)



type FlagTypeEnum string

const (
    FlagTypeEnumSQLFlagTypeUnspecified FlagTypeEnum = "SQL_FLAG_TYPE_UNSPECIFIED"
FlagTypeEnumBoolean FlagTypeEnum = "BOOLEAN"
FlagTypeEnumString FlagTypeEnum = "STRING"
FlagTypeEnumInteger FlagTypeEnum = "INTEGER"
FlagTypeEnumNone FlagTypeEnum = "NONE"
FlagTypeEnumMysqlTimezoneOffset FlagTypeEnum = "MYSQL_TIMEZONE_OFFSET"
FlagTypeEnumFloat FlagTypeEnum = "FLOAT"
FlagTypeEnumRepeatedString FlagTypeEnum = "REPEATED_STRING"
)


type Flag struct {
    AllowedIntValues []string `json:"allowedIntValues,omitempty"`
    AllowedStringValues []string `json:"allowedStringValues,omitempty"`
    AppliesTo []FlagAppliesToEnum `json:"appliesTo,omitempty"`
    InBeta *bool `json:"inBeta,omitempty"`
    Kind *string `json:"kind,omitempty"`
    MaxValue *string `json:"maxValue,omitempty"`
    MinValue *string `json:"minValue,omitempty"`
    Name *string `json:"name,omitempty"`
    RequiresRestart *bool `json:"requiresRestart,omitempty"`
    Type *FlagTypeEnum `json:"type,omitempty"`
    
}

