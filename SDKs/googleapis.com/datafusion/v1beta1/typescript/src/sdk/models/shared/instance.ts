import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Accelerator } from "./accelerator";
import { Version } from "./version";
import { CryptoKeyConfig } from "./cryptokeyconfig";
import { EventPublishConfig } from "./eventpublishconfig";
import { NetworkConfig } from "./networkconfig";

export enum InstanceDisabledReasonEnum {
    DisabledReasonUnspecified = "DISABLED_REASON_UNSPECIFIED"
,    KmsKeyIssue = "KMS_KEY_ISSUE"
}

export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Running = "RUNNING"
,    Failed = "FAILED"
,    Deleting = "DELETING"
,    Upgrading = "UPGRADING"
,    Restarting = "RESTARTING"
,    Updating = "UPDATING"
,    AutoUpdating = "AUTO_UPDATING"
,    AutoUpgrading = "AUTO_UPGRADING"
,    Disabled = "DISABLED"
}

export enum InstanceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Basic = "BASIC"
,    Enterprise = "ENTERPRISE"
,    Developer = "DEVELOPER"
}


// Instance
/** 
 * Represents a Data Fusion instance.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=accelerators", elemType: shared.Accelerator })
  accelerators?: Accelerator[];

  @Metadata({ data: "json, name=apiEndpoint" })
  apiEndpoint?: string;

  @Metadata({ data: "json, name=availableVersion", elemType: shared.Version })
  availableVersion?: Version[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=cryptoKeyConfig" })
  cryptoKeyConfig?: CryptoKeyConfig;

  @Metadata({ data: "json, name=dataprocServiceAccount" })
  dataprocServiceAccount?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disabledReason" })
  disabledReason?: InstanceDisabledReasonEnum[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enableRbac" })
  enableRbac?: boolean;

  @Metadata({ data: "json, name=enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;

  @Metadata({ data: "json, name=enableStackdriverMonitoring" })
  enableStackdriverMonitoring?: boolean;

  @Metadata({ data: "json, name=eventPublishConfig" })
  eventPublishConfig?: EventPublishConfig;

  @Metadata({ data: "json, name=gcsBucket" })
  gcsBucket?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @Metadata({ data: "json, name=options" })
  options?: Map<string, string>;

  @Metadata({ data: "json, name=p4ServiceAccount" })
  p4ServiceAccount?: string;

  @Metadata({ data: "json, name=privateInstance" })
  privateInstance?: boolean;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=serviceEndpoint" })
  serviceEndpoint?: string;

  @Metadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @Metadata({ data: "json, name=tenantProjectId" })
  tenantProjectId?: string;

  @Metadata({ data: "json, name=type" })
  type?: InstanceTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
