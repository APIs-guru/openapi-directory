import { SpeakeasyBase } from "../../../internal/utils";
import { SqlIpConfig } from "./sqlipconfig";
export declare enum CloudSqlSettingsActivationPolicyEnum {
    SqlActivationPolicyUnspecified = "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    Always = "ALWAYS",
    Never = "NEVER"
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
    Mysql80 = "MYSQL_8_0"
}
/**
 * Settings for creating a Cloud SQL database instance.
**/
export declare class CloudSqlSettingsInput extends SpeakeasyBase {
    activationPolicy?: CloudSqlSettingsActivationPolicyEnum;
    autoStorageIncrease?: boolean;
    dataDiskSizeGb?: string;
    dataDiskType?: CloudSqlSettingsDataDiskTypeEnum;
    databaseFlags?: Map<string, string>;
    databaseVersion?: CloudSqlSettingsDatabaseVersionEnum;
    ipConfig?: SqlIpConfig;
    rootPassword?: string;
    sourceId?: string;
    storageAutoResizeLimit?: string;
    tier?: string;
    userLabels?: Map<string, string>;
    zone?: string;
}
/**
 * Settings for creating a Cloud SQL database instance.
**/
export declare class CloudSqlSettings extends SpeakeasyBase {
    activationPolicy?: CloudSqlSettingsActivationPolicyEnum;
    autoStorageIncrease?: boolean;
    dataDiskSizeGb?: string;
    dataDiskType?: CloudSqlSettingsDataDiskTypeEnum;
    databaseFlags?: Map<string, string>;
    databaseVersion?: CloudSqlSettingsDatabaseVersionEnum;
    ipConfig?: SqlIpConfig;
    rootPassword?: string;
    rootPasswordSet?: boolean;
    sourceId?: string;
    storageAutoResizeLimit?: string;
    tier?: string;
    userLabels?: Map<string, string>;
    zone?: string;
}
