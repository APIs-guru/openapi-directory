import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Accelerator } from "./accelerator";
import { Version } from "./version";
import { CryptoKeyConfig } from "./cryptokeyconfig";
import { EventPublishConfig } from "./eventpublishconfig";
import { NetworkConfig } from "./networkconfig";


export enum InstanceDisabledReasonEnum {
    DisabledReasonUnspecified = "DISABLED_REASON_UNSPECIFIED",
    KmsKeyIssue = "KMS_KEY_ISSUE"
}

export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Failed = "FAILED",
    Deleting = "DELETING",
    Upgrading = "UPGRADING",
    Restarting = "RESTARTING",
    Updating = "UPDATING",
    AutoUpdating = "AUTO_UPDATING",
    AutoUpgrading = "AUTO_UPGRADING",
    Disabled = "DISABLED"
}

export enum InstanceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Basic = "BASIC",
    Enterprise = "ENTERPRISE",
    Developer = "DEVELOPER"
}


// Instance
/** 
 * Represents a Data Fusion instance.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accelerators", elemType: Accelerator })
  accelerators?: Accelerator[];

  @SpeakeasyMetadata({ data: "json, name=apiEndpoint" })
  apiEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=availableVersion", elemType: Version })
  availableVersion?: Version[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=cryptoKeyConfig" })
  cryptoKeyConfig?: CryptoKeyConfig;

  @SpeakeasyMetadata({ data: "json, name=dataprocServiceAccount" })
  dataprocServiceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabledReason" })
  disabledReason?: InstanceDisabledReasonEnum[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableRbac" })
  enableRbac?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableStackdriverMonitoring" })
  enableStackdriverMonitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventPublishConfig" })
  eventPublishConfig?: EventPublishConfig;

  @SpeakeasyMetadata({ data: "json, name=gcsBucket" })
  gcsBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=p4ServiceAccount" })
  p4ServiceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=privateInstance" })
  privateInstance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceEndpoint" })
  serviceEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantProjectId" })
  tenantProjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}


// InstanceInput
/** 
 * Represents a Data Fusion instance.
**/
export class InstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accelerators", elemType: Accelerator })
  accelerators?: Accelerator[];

  @SpeakeasyMetadata({ data: "json, name=availableVersion", elemType: Version })
  availableVersion?: Version[];

  @SpeakeasyMetadata({ data: "json, name=cryptoKeyConfig" })
  cryptoKeyConfig?: CryptoKeyConfig;

  @SpeakeasyMetadata({ data: "json, name=dataprocServiceAccount" })
  dataprocServiceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableRbac" })
  enableRbac?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableStackdriverMonitoring" })
  enableStackdriverMonitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventPublishConfig" })
  eventPublishConfig?: EventPublishConfig;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=privateInstance" })
  privateInstance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
