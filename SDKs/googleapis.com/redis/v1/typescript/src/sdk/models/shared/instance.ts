import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenancePolicy } from "./maintenancepolicy";
import { MaintenanceSchedule } from "./maintenanceschedule";
import { NodeInfo } from "./nodeinfo";
import { PersistenceConfig } from "./persistenceconfig";
import { TlsCertificate } from "./tlscertificate";
import { MaintenancePolicyInput } from "./maintenancepolicy";
import { MaintenanceScheduleInput } from "./maintenanceschedule";
import { PersistenceConfigInput } from "./persistenceconfig";


export enum InstanceStateEnum {
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

export enum InstanceConnectModeEnum {
    ConnectModeUnspecified = "CONNECT_MODE_UNSPECIFIED",
    DirectPeering = "DIRECT_PEERING",
    PrivateServiceAccess = "PRIVATE_SERVICE_ACCESS"
}

export enum InstanceReadReplicasModeEnum {
    ReadReplicasModeUnspecified = "READ_REPLICAS_MODE_UNSPECIFIED",
    ReadReplicasDisabled = "READ_REPLICAS_DISABLED",
    ReadReplicasEnabled = "READ_REPLICAS_ENABLED"
}

export enum InstanceSuspensionReasonsEnum {
    SuspensionReasonUnspecified = "SUSPENSION_REASON_UNSPECIFIED",
    CustomerManagedKeyIssue = "CUSTOMER_MANAGED_KEY_ISSUE"
}

export enum InstanceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Basic = "BASIC",
    StandardHa = "STANDARD_HA"
}

export enum InstanceTransitEncryptionModeEnum {
    TransitEncryptionModeUnspecified = "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED",
    ServerAuthentication = "SERVER_AUTHENTICATION",
    Disabled = "DISABLED"
}


// Instance
/** 
 * A Memorystore for Redis instance.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternativeLocationId" })
  alternativeLocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=authEnabled" })
  authEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=connectMode" })
  connectMode?: InstanceConnectModeEnum;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=currentLocationId" })
  currentLocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerManagedKey" })
  customerManagedKey?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=maintenancePolicy" })
  maintenancePolicy?: MaintenancePolicy;

  @SpeakeasyMetadata({ data: "json, name=maintenanceSchedule" })
  maintenanceSchedule?: MaintenanceSchedule;

  @SpeakeasyMetadata({ data: "json, name=memorySizeGb" })
  memorySizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: NodeInfo })
  nodes?: NodeInfo[];

  @SpeakeasyMetadata({ data: "json, name=persistenceConfig" })
  persistenceConfig?: PersistenceConfig;

  @SpeakeasyMetadata({ data: "json, name=persistenceIamIdentity" })
  persistenceIamIdentity?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=readEndpoint" })
  readEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=readEndpointPort" })
  readEndpointPort?: number;

  @SpeakeasyMetadata({ data: "json, name=readReplicasMode" })
  readReplicasMode?: InstanceReadReplicasModeEnum;

  @SpeakeasyMetadata({ data: "json, name=redisConfigs" })
  redisConfigs?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=redisVersion" })
  redisVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=replicaCount" })
  replicaCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reservedIpRange" })
  reservedIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryIpRange" })
  secondaryIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=serverCaCerts", elemType: TlsCertificate })
  serverCaCerts?: TlsCertificate[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=suspensionReasons" })
  suspensionReasons?: InstanceSuspensionReasonsEnum[];

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: InstanceTierEnum;

  @SpeakeasyMetadata({ data: "json, name=transitEncryptionMode" })
  transitEncryptionMode?: InstanceTransitEncryptionModeEnum;
}


// InstanceInput
/** 
 * A Memorystore for Redis instance.
**/
export class InstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternativeLocationId" })
  alternativeLocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=authEnabled" })
  authEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=connectMode" })
  connectMode?: InstanceConnectModeEnum;

  @SpeakeasyMetadata({ data: "json, name=customerManagedKey" })
  customerManagedKey?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=maintenancePolicy" })
  maintenancePolicy?: MaintenancePolicyInput;

  @SpeakeasyMetadata({ data: "json, name=maintenanceSchedule" })
  maintenanceSchedule?: MaintenanceScheduleInput;

  @SpeakeasyMetadata({ data: "json, name=memorySizeGb" })
  memorySizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=persistenceConfig" })
  persistenceConfig?: PersistenceConfigInput;

  @SpeakeasyMetadata({ data: "json, name=readReplicasMode" })
  readReplicasMode?: InstanceReadReplicasModeEnum;

  @SpeakeasyMetadata({ data: "json, name=redisConfigs" })
  redisConfigs?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=redisVersion" })
  redisVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=replicaCount" })
  replicaCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reservedIpRange" })
  reservedIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryIpRange" })
  secondaryIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=suspensionReasons" })
  suspensionReasons?: InstanceSuspensionReasonsEnum[];

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: InstanceTierEnum;

  @SpeakeasyMetadata({ data: "json, name=transitEncryptionMode" })
  transitEncryptionMode?: InstanceTransitEncryptionModeEnum;
}
