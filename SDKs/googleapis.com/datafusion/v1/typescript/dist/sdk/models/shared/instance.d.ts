import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Accelerator } from "./accelerator";
import { Version } from "./version";
import { CryptoKeyConfig } from "./cryptokeyconfig";
import { EventPublishConfig } from "./eventpublishconfig";
import { NetworkConfig } from "./networkconfig";
export declare enum InstanceDisabledReasonEnum {
    DisabledReasonUnspecified = "DISABLED_REASON_UNSPECIFIED",
    KmsKeyIssue = "KMS_KEY_ISSUE"
}
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Upgrading = "UPGRADING",
    Restarting = "RESTARTING",
    Updating = "UPDATING",
    AutoUpdating = "AUTO_UPDATING",
    AutoUpgrading = "AUTO_UPGRADING",
    Disabled = "DISABLED"
}
export declare enum InstanceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Basic = "BASIC",
    Enterprise = "ENTERPRISE",
    Developer = "DEVELOPER"
}
/**
 * Represents a Data Fusion instance.
**/
export declare class Instance extends SpeakeasyBase {
    accelerators?: Accelerator[];
    apiEndpoint?: string;
    availableVersion?: Version[];
    createTime?: string;
    cryptoKeyConfig?: CryptoKeyConfig;
    dataprocServiceAccount?: string;
    description?: string;
    disabledReason?: InstanceDisabledReasonEnum[];
    displayName?: string;
    enableRbac?: boolean;
    enableStackdriverLogging?: boolean;
    enableStackdriverMonitoring?: boolean;
    eventPublishConfig?: EventPublishConfig;
    gcsBucket?: string;
    labels?: Map<string, string>;
    name?: string;
    networkConfig?: NetworkConfig;
    options?: Map<string, string>;
    p4ServiceAccount?: string;
    privateInstance?: boolean;
    serviceAccount?: string;
    serviceEndpoint?: string;
    state?: InstanceStateEnum;
    stateMessage?: string;
    tenantProjectId?: string;
    type?: InstanceTypeEnum;
    updateTime?: string;
    version?: string;
    zone?: string;
}
