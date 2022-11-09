import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BackupSourceInstanceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED"
,    Standard = "STANDARD"
,    Premium = "PREMIUM"
,    BasicHdd = "BASIC_HDD"
,    BasicSsd = "BASIC_SSD"
,    HighScaleSsd = "HIGH_SCALE_SSD"
,    Enterprise = "ENTERPRISE"
}

export enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Finalizing = "FINALIZING"
,    Ready = "READY"
,    Deleting = "DELETING"
}


// Backup
/** 
 * A Filestore backup.
**/
export class Backup extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityGb" })
  capacityGb?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=downloadBytes" })
  downloadBytes?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @Metadata({ data: "json, name=sourceFileShare" })
  sourceFileShare?: string;

  @Metadata({ data: "json, name=sourceInstance" })
  sourceInstance?: string;

  @Metadata({ data: "json, name=sourceInstanceTier" })
  sourceInstanceTier?: BackupSourceInstanceTierEnum;

  @Metadata({ data: "json, name=state" })
  state?: BackupStateEnum;

  @Metadata({ data: "json, name=storageBytes" })
  storageBytes?: string;
}
