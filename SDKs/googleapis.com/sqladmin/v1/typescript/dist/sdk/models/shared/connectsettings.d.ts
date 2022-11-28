import { SpeakeasyBase } from "../../../internal/utils";
import { IpMapping } from "./ipmapping";
import { SslCert } from "./sslcert";
export declare enum ConnectSettingsBackendTypeEnum {
    SqlBackendTypeUnspecified = "SQL_BACKEND_TYPE_UNSPECIFIED",
    FirstGen = "FIRST_GEN",
    SecondGen = "SECOND_GEN",
    External = "EXTERNAL"
}
export declare enum ConnectSettingsDatabaseVersionEnum {
    SqlDatabaseVersionUnspecified = "SQL_DATABASE_VERSION_UNSPECIFIED",
    Mysql51 = "MYSQL_5_1",
    Mysql55 = "MYSQL_5_5",
    Mysql56 = "MYSQL_5_6",
    Mysql57 = "MYSQL_5_7",
    Sqlserver2017Standard = "SQLSERVER_2017_STANDARD",
    Sqlserver2017Enterprise = "SQLSERVER_2017_ENTERPRISE",
    Sqlserver2017Express = "SQLSERVER_2017_EXPRESS",
    Sqlserver2017Web = "SQLSERVER_2017_WEB",
    Postgres96 = "POSTGRES_9_6",
    Postgres10 = "POSTGRES_10",
    Postgres11 = "POSTGRES_11",
    Postgres12 = "POSTGRES_12",
    Postgres13 = "POSTGRES_13",
    Postgres14 = "POSTGRES_14",
    Mysql80 = "MYSQL_8_0",
    Mysql8018 = "MYSQL_8_0_18",
    Mysql8026 = "MYSQL_8_0_26",
    Mysql8027 = "MYSQL_8_0_27",
    Mysql8028 = "MYSQL_8_0_28",
    Mysql8029 = "MYSQL_8_0_29",
    Mysql8030 = "MYSQL_8_0_30",
    Sqlserver2019Standard = "SQLSERVER_2019_STANDARD",
    Sqlserver2019Enterprise = "SQLSERVER_2019_ENTERPRISE",
    Sqlserver2019Express = "SQLSERVER_2019_EXPRESS",
    Sqlserver2019Web = "SQLSERVER_2019_WEB"
}
/**
 * Connect settings retrieval response.
**/
export declare class ConnectSettings extends SpeakeasyBase {
    backendType?: ConnectSettingsBackendTypeEnum;
    databaseVersion?: ConnectSettingsDatabaseVersionEnum;
    ipAddresses?: IpMapping[];
    kind?: string;
    region?: string;
    serverCaCert?: SslCert;
}
