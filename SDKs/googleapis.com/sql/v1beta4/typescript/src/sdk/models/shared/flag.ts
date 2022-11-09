import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FlagAppliesToEnum {
    SqlDatabaseVersionUnspecified = "SQL_DATABASE_VERSION_UNSPECIFIED"
,    Mysql51 = "MYSQL_5_1"
,    Mysql55 = "MYSQL_5_5"
,    Mysql56 = "MYSQL_5_6"
,    Mysql57 = "MYSQL_5_7"
,    Sqlserver2017Standard = "SQLSERVER_2017_STANDARD"
,    Sqlserver2017Enterprise = "SQLSERVER_2017_ENTERPRISE"
,    Sqlserver2017Express = "SQLSERVER_2017_EXPRESS"
,    Sqlserver2017Web = "SQLSERVER_2017_WEB"
,    Postgres96 = "POSTGRES_9_6"
,    Postgres10 = "POSTGRES_10"
,    Postgres11 = "POSTGRES_11"
,    Postgres12 = "POSTGRES_12"
,    Postgres13 = "POSTGRES_13"
,    Postgres14 = "POSTGRES_14"
,    Mysql80 = "MYSQL_8_0"
,    Mysql8018 = "MYSQL_8_0_18"
,    Mysql8026 = "MYSQL_8_0_26"
,    Mysql8027 = "MYSQL_8_0_27"
,    Mysql8028 = "MYSQL_8_0_28"
,    Mysql8029 = "MYSQL_8_0_29"
,    Mysql8030 = "MYSQL_8_0_30"
,    Sqlserver2019Standard = "SQLSERVER_2019_STANDARD"
,    Sqlserver2019Enterprise = "SQLSERVER_2019_ENTERPRISE"
,    Sqlserver2019Express = "SQLSERVER_2019_EXPRESS"
,    Sqlserver2019Web = "SQLSERVER_2019_WEB"
}

export enum FlagTypeEnum {
    SqlFlagTypeUnspecified = "SQL_FLAG_TYPE_UNSPECIFIED"
,    Boolean = "BOOLEAN"
,    String = "STRING"
,    Integer = "INTEGER"
,    None = "NONE"
,    MysqlTimezoneOffset = "MYSQL_TIMEZONE_OFFSET"
,    Float = "FLOAT"
,    RepeatedString = "REPEATED_STRING"
}


// Flag
/** 
 * A flag resource.
**/
export class Flag extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedIntValues" })
  allowedIntValues?: string[];

  @Metadata({ data: "json, name=allowedStringValues" })
  allowedStringValues?: string[];

  @Metadata({ data: "json, name=appliesTo" })
  appliesTo?: FlagAppliesToEnum[];

  @Metadata({ data: "json, name=inBeta" })
  inBeta?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=maxValue" })
  maxValue?: string;

  @Metadata({ data: "json, name=minValue" })
  minValue?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=requiresRestart" })
  requiresRestart?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: FlagTypeEnum;
}
