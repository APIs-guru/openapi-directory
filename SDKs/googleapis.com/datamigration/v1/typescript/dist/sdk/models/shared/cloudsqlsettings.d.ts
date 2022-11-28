import { SpeakeasyBase } from "../../../internal/utils";
import { SqlIpConfig } from "./sqlipconfig";
export declare enum CloudSqlSettingsActivationPolicyEnum {
    SqlActivationPolicyUnspecified = "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    Always = "ALWAYS",
    Never = "NEVER"
}
export declare enum CloudSqlSettingsAvailabilityTypeEnum {
    SqlAvailabilityTypeUnspecified = "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
    Zonal = "ZONAL",
    Regional = "REGIONAL"
}
export declare enum CloudSqlSettingsDataDiskTypeEnum {
    SqlDataDiskTypeUnspecified = "SQL_DATA_DISK_TYPE_UNSPECIFIED",
    PdSsd = "PD_SSD",
    PdHdd = "PD_HDD"
}
export declare enum CloudSqlSettingsDatabaseVersionEnum {
    SqlDatabaseVersionUnspecified = "SQL_DATABASE_VERSION_UNSPECIFIED",
    Mysql56 = "MYSQL_5_6",
    Mysql57 = "MYSQL_5_7",
    Postgres96 = "POSTGRES_9_6",
    Postgres11 = "POSTGRES_11",
    Postgres10 = "POSTGRES_10",
    Mysql80 = "MYSQL_8_0",
    Postgres12 = "POSTGRES_12",
    Postgres13 = "POSTGRES_13",
    Postgres14 = "POSTGRES_14"
}
/**
 * Settings for creating a Cloud SQL database instance.
**/
export declare class CloudSqlSettings extends SpeakeasyBase {
    activationPolicy?: CloudSqlSettingsActivationPolicyEnum;
    autoStorageIncrease?: boolean;
    availabilityType?: CloudSqlSettingsAvailabilityTypeEnum;
    cmekKeyName?: string;
    collation?: string;
    dataDiskSizeGb?: string;
    dataDiskType?: CloudSqlSettingsDataDiskTypeEnum;
    databaseFlags?: Map<string, string>;
    databaseVersion?: CloudSqlSettingsDatabaseVersionEnum;
    ipConfig?: SqlIpConfig;
    rootPassword?: string;
    rootPasswordSet?: boolean;
    secondaryZone?: string;
    sourceId?: string;
    storageAutoResizeLimit?: string;
    tier?: string;
    userLabels?: Map<string, string>;
    zone?: string;
}
/**
 * Settings for creating a Cloud SQL database instance.
**/
export declare class CloudSqlSettingsInput extends SpeakeasyBase {
    activationPolicy?: CloudSqlSettingsActivationPolicyEnum;
    autoStorageIncrease?: boolean;
    availabilityType?: CloudSqlSettingsAvailabilityTypeEnum;
    cmekKeyName?: string;
    collation?: string;
    dataDiskSizeGb?: string;
    dataDiskType?: CloudSqlSettingsDataDiskTypeEnum;
    databaseFlags?: Map<string, string>;
    databaseVersion?: CloudSqlSettingsDatabaseVersionEnum;
    ipConfig?: SqlIpConfig;
    rootPassword?: string;
    secondaryZone?: string;
    sourceId?: string;
    storageAutoResizeLimit?: string;
    tier?: string;
    userLabels?: Map<string, string>;
    zone?: string;
}
