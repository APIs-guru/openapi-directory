import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileShareConfig } from "./fileshareconfig";
import { NetworkConfig } from "./networkconfig";

export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Repairing = "REPAIRING"
,    Deleting = "DELETING"
,    Error = "ERROR"
,    Restoring = "RESTORING"
,    Suspended = "SUSPENDED"
,    Reverting = "REVERTING"
}

export enum InstanceSuspensionReasonsEnum {
    SuspensionReasonUnspecified = "SUSPENSION_REASON_UNSPECIFIED"
,    KmsKeyIssue = "KMS_KEY_ISSUE"
}

export enum InstanceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED"
,    Standard = "STANDARD"
,    Premium = "PREMIUM"
,    BasicHdd = "BASIC_HDD"
,    BasicSsd = "BASIC_SSD"
,    HighScaleSsd = "HIGH_SCALE_SSD"
,    Enterprise = "ENTERPRISE"
}


// Instance
/** 
 * A Filestore instance.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityGb" })
  capacityGb?: string;

  @Metadata({ data: "json, name=capacityStepSizeGb" })
  capacityStepSizeGb?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=fileShares", elemType: shared.FileShareConfig })
  fileShares?: FileShareConfig[];

  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=maxCapacityGb" })
  maxCapacityGb?: string;

  @Metadata({ data: "json, name=maxShareCount" })
  maxShareCount?: string;

  @Metadata({ data: "json, name=multiShareEnabled" })
  multiShareEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networks", elemType: shared.NetworkConfig })
  networks?: NetworkConfig[];

  @Metadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @Metadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=suspensionReasons" })
  suspensionReasons?: InstanceSuspensionReasonsEnum[];

  @Metadata({ data: "json, name=tier" })
  tier?: InstanceTierEnum;
}
