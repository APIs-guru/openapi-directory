import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BackupSourceInstanceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Standard = "STANDARD",
    Premium = "PREMIUM",
    BasicHdd = "BASIC_HDD",
    BasicSsd = "BASIC_SSD",
    HighScaleSsd = "HIGH_SCALE_SSD",
    Enterprise = "ENTERPRISE"
}

export enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Finalizing = "FINALIZING",
    Ready = "READY",
    Deleting = "DELETING"
}


// BackupInput
/** 
 * A Filestore backup.
**/
export class BackupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sourceFileShare" })
  sourceFileShare?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceInstance" })
  sourceInstance?: string;
}


// Backup
/** 
 * A Filestore backup.
**/
export class Backup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityGb" })
  capacityGb?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadBytes" })
  downloadBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceFileShare" })
  sourceFileShare?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceInstance" })
  sourceInstance?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceInstanceTier" })
  sourceInstanceTier?: BackupSourceInstanceTierEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BackupStateEnum;

  @SpeakeasyMetadata({ data: "json, name=storageBytes" })
  storageBytes?: string;
}
