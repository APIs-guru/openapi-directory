import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MaintenancePolicy } from "./maintenancepolicy";
import { MaintenanceSchedule } from "./maintenanceschedule";
import { NodeInfo } from "./nodeinfo";
import { PersistenceConfig } from "./persistenceconfig";
import { TlsCertificate } from "./tlscertificate";
export declare enum InstanceConnectModeEnum {
    ConnectModeUnspecified = "CONNECT_MODE_UNSPECIFIED",
    DirectPeering = "DIRECT_PEERING",
    PrivateServiceAccess = "PRIVATE_SERVICE_ACCESS"
}
export declare enum InstanceReadReplicasModeEnum {
    ReadReplicasModeUnspecified = "READ_REPLICAS_MODE_UNSPECIFIED",
    ReadReplicasDisabled = "READ_REPLICAS_DISABLED",
    ReadReplicasEnabled = "READ_REPLICAS_ENABLED"
}
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Repairing = "REPAIRING",
    Maintenance = "MAINTENANCE",
    Importing = "IMPORTING",
    FailingOver = "FAILING_OVER"
}
export declare enum InstanceSuspensionReasonsEnum {
    SuspensionReasonUnspecified = "SUSPENSION_REASON_UNSPECIFIED",
    CustomerManagedKeyIssue = "CUSTOMER_MANAGED_KEY_ISSUE"
}
export declare enum InstanceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Basic = "BASIC",
    StandardHa = "STANDARD_HA"
}
export declare enum InstanceTransitEncryptionModeEnum {
    TransitEncryptionModeUnspecified = "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED",
    ServerAuthentication = "SERVER_AUTHENTICATION",
    Disabled = "DISABLED"
}
/**
 * A Memorystore for Redis instance.
**/
export declare class Instance extends SpeakeasyBase {
    alternativeLocationId?: string;
    authEnabled?: boolean;
    authorizedNetwork?: string;
    availableMaintenanceVersions?: string[];
    connectMode?: InstanceConnectModeEnum;
    createTime?: string;
    currentLocationId?: string;
    customerManagedKey?: string;
    displayName?: string;
    host?: string;
    labels?: Map<string, string>;
    locationId?: string;
    maintenancePolicy?: MaintenancePolicy;
    maintenanceSchedule?: MaintenanceSchedule;
    maintenanceVersion?: string;
    memorySizeGb?: number;
    name?: string;
    nodes?: NodeInfo[];
    persistenceConfig?: PersistenceConfig;
    persistenceIamIdentity?: string;
    port?: number;
    readEndpoint?: string;
    readEndpointPort?: number;
    readReplicasMode?: InstanceReadReplicasModeEnum;
    redisConfigs?: Map<string, string>;
    redisVersion?: string;
    replicaCount?: number;
    reservedIpRange?: string;
    secondaryIpRange?: string;
    serverCaCerts?: TlsCertificate[];
    state?: InstanceStateEnum;
    statusMessage?: string;
    suspensionReasons?: InstanceSuspensionReasonsEnum[];
    tier?: InstanceTierEnum;
    transitEncryptionMode?: InstanceTransitEncryptionModeEnum;
}
