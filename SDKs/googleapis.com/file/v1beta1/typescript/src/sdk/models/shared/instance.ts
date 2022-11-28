import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileShareConfig } from "./fileshareconfig";
import { NetworkConfig } from "./networkconfig";
import { NetworkConfigInput } from "./networkconfig";


export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Repairing = "REPAIRING",
    Deleting = "DELETING",
    Error = "ERROR",
    Restoring = "RESTORING",
    Suspended = "SUSPENDED",
    Reverting = "REVERTING",
    Suspending = "SUSPENDING",
    Resuming = "RESUMING"
}

export enum InstanceSuspensionReasonsEnum {
    SuspensionReasonUnspecified = "SUSPENSION_REASON_UNSPECIFIED",
    KmsKeyIssue = "KMS_KEY_ISSUE"
}

export enum InstanceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Standard = "STANDARD",
    Premium = "PREMIUM",
    BasicHdd = "BASIC_HDD",
    BasicSsd = "BASIC_SSD",
    HighScaleSsd = "HIGH_SCALE_SSD",
    Enterprise = "ENTERPRISE"
}


// Instance
/** 
 * A Filestore instance.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityGb" })
  capacityGb?: string;

  @SpeakeasyMetadata({ data: "json, name=capacityStepSizeGb" })
  capacityStepSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=fileShares", elemType: FileShareConfig })
  fileShares?: FileShareConfig[];

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=maxCapacityGb" })
  maxCapacityGb?: string;

  @SpeakeasyMetadata({ data: "json, name=maxShareCount" })
  maxShareCount?: string;

  @SpeakeasyMetadata({ data: "json, name=multiShareEnabled" })
  multiShareEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: NetworkConfig })
  networks?: NetworkConfig[];

  @SpeakeasyMetadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=suspensionReasons" })
  suspensionReasons?: InstanceSuspensionReasonsEnum[];

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: InstanceTierEnum;
}


// InstanceInput
/** 
 * A Filestore instance.
**/
export class InstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityGb" })
  capacityGb?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=fileShares", elemType: FileShareConfig })
  fileShares?: FileShareConfig[];

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=multiShareEnabled" })
  multiShareEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: NetworkConfigInput })
  networks?: NetworkConfigInput[];

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: InstanceTierEnum;
}
