import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlIpConfig } from "./sqlipconfig";


export enum CloudSqlSettingsActivationPolicyEnum {
    SqlActivationPolicyUnspecified = "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    Always = "ALWAYS",
    Never = "NEVER"
}

export enum CloudSqlSettingsAvailabilityTypeEnum {
    SqlAvailabilityTypeUnspecified = "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
    Zonal = "ZONAL",
    Regional = "REGIONAL"
}

export enum CloudSqlSettingsDataDiskTypeEnum {
    SqlDataDiskTypeUnspecified = "SQL_DATA_DISK_TYPE_UNSPECIFIED",
    PdSsd = "PD_SSD",
    PdHdd = "PD_HDD"
}

export enum CloudSqlSettingsDatabaseVersionEnum {
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


// CloudSqlSettings
/** 
 * Settings for creating a Cloud SQL database instance.
**/
export class CloudSqlSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationPolicy" })
  activationPolicy?: CloudSqlSettingsActivationPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=autoStorageIncrease" })
  autoStorageIncrease?: boolean;

  @SpeakeasyMetadata({ data: "json, name=availabilityType" })
  availabilityType?: CloudSqlSettingsAvailabilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=cmekKeyName" })
  cmekKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=collation" })
  collation?: string;

  @SpeakeasyMetadata({ data: "json, name=dataDiskSizeGb" })
  dataDiskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=dataDiskType" })
  dataDiskType?: CloudSqlSettingsDataDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=databaseFlags" })
  databaseFlags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=databaseVersion" })
  databaseVersion?: CloudSqlSettingsDatabaseVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=ipConfig" })
  ipConfig?: SqlIpConfig;

  @SpeakeasyMetadata({ data: "json, name=rootPassword" })
  rootPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=rootPasswordSet" })
  rootPasswordSet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=secondaryZone" })
  secondaryZone?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=storageAutoResizeLimit" })
  storageAutoResizeLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: string;

  @SpeakeasyMetadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}


// CloudSqlSettingsInput
/** 
 * Settings for creating a Cloud SQL database instance.
**/
export class CloudSqlSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationPolicy" })
  activationPolicy?: CloudSqlSettingsActivationPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=autoStorageIncrease" })
  autoStorageIncrease?: boolean;

  @SpeakeasyMetadata({ data: "json, name=availabilityType" })
  availabilityType?: CloudSqlSettingsAvailabilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=cmekKeyName" })
  cmekKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=collation" })
  collation?: string;

  @SpeakeasyMetadata({ data: "json, name=dataDiskSizeGb" })
  dataDiskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=dataDiskType" })
  dataDiskType?: CloudSqlSettingsDataDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=databaseFlags" })
  databaseFlags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=databaseVersion" })
  databaseVersion?: CloudSqlSettingsDatabaseVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=ipConfig" })
  ipConfig?: SqlIpConfig;

  @SpeakeasyMetadata({ data: "json, name=rootPassword" })
  rootPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryZone" })
  secondaryZone?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=storageAutoResizeLimit" })
  storageAutoResizeLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: string;

  @SpeakeasyMetadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
