import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SqlIpConfig } from "./sqlipconfig";

export enum CloudSqlSettingsActivationPolicyEnum {
    SqlActivationPolicyUnspecified = "SQL_ACTIVATION_POLICY_UNSPECIFIED"
,    Always = "ALWAYS"
,    Never = "NEVER"
}

export enum CloudSqlSettingsDataDiskTypeEnum {
    SqlDataDiskTypeUnspecified = "SQL_DATA_DISK_TYPE_UNSPECIFIED"
,    PdSsd = "PD_SSD"
,    PdHdd = "PD_HDD"
}

export enum CloudSqlSettingsDatabaseVersionEnum {
    SqlDatabaseVersionUnspecified = "SQL_DATABASE_VERSION_UNSPECIFIED"
,    Mysql56 = "MYSQL_5_6"
,    Mysql57 = "MYSQL_5_7"
,    Mysql80 = "MYSQL_8_0"
}


// CloudSqlSettings
/** 
 * Settings for creating a Cloud SQL database instance.
**/
export class CloudSqlSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=activationPolicy" })
  activationPolicy?: CloudSqlSettingsActivationPolicyEnum;

  @Metadata({ data: "json, name=autoStorageIncrease" })
  autoStorageIncrease?: boolean;

  @Metadata({ data: "json, name=dataDiskSizeGb" })
  dataDiskSizeGb?: string;

  @Metadata({ data: "json, name=dataDiskType" })
  dataDiskType?: CloudSqlSettingsDataDiskTypeEnum;

  @Metadata({ data: "json, name=databaseFlags" })
  databaseFlags?: Map<string, string>;

  @Metadata({ data: "json, name=databaseVersion" })
  databaseVersion?: CloudSqlSettingsDatabaseVersionEnum;

  @Metadata({ data: "json, name=ipConfig" })
  ipConfig?: SqlIpConfig;

  @Metadata({ data: "json, name=rootPassword" })
  rootPassword?: string;

  @Metadata({ data: "json, name=rootPasswordSet" })
  rootPasswordSet?: boolean;

  @Metadata({ data: "json, name=sourceId" })
  sourceId?: string;

  @Metadata({ data: "json, name=storageAutoResizeLimit" })
  storageAutoResizeLimit?: string;

  @Metadata({ data: "json, name=tier" })
  tier?: string;

  @Metadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
