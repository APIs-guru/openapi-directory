import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MaintenancePolicy } from "./maintenancepolicy";
import { MaintenanceSchedule } from "./maintenanceschedule";
import { NodeInfo } from "./nodeinfo";
import { PersistenceConfig } from "./persistenceconfig";
import { TlsCertificate } from "./tlscertificate";

export enum InstanceConnectModeEnum {
    ConnectModeUnspecified = "CONNECT_MODE_UNSPECIFIED"
,    DirectPeering = "DIRECT_PEERING"
,    PrivateServiceAccess = "PRIVATE_SERVICE_ACCESS"
}

export enum InstanceReadReplicasModeEnum {
    ReadReplicasModeUnspecified = "READ_REPLICAS_MODE_UNSPECIFIED"
,    ReadReplicasDisabled = "READ_REPLICAS_DISABLED"
,    ReadReplicasEnabled = "READ_REPLICAS_ENABLED"
}

export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Repairing = "REPAIRING"
,    Maintenance = "MAINTENANCE"
,    Importing = "IMPORTING"
,    FailingOver = "FAILING_OVER"
}

export enum InstanceSuspensionReasonsEnum {
    SuspensionReasonUnspecified = "SUSPENSION_REASON_UNSPECIFIED"
,    CustomerManagedKeyIssue = "CUSTOMER_MANAGED_KEY_ISSUE"
}

export enum InstanceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED"
,    Basic = "BASIC"
,    StandardHa = "STANDARD_HA"
}

export enum InstanceTransitEncryptionModeEnum {
    TransitEncryptionModeUnspecified = "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
,    ServerAuthentication = "SERVER_AUTHENTICATION"
,    Disabled = "DISABLED"
}


// Instance
/** 
 * A Memorystore for Redis instance.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternativeLocationId" })
  alternativeLocationId?: string;

  @Metadata({ data: "json, name=authEnabled" })
  authEnabled?: boolean;

  @Metadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @Metadata({ data: "json, name=connectMode" })
  connectMode?: InstanceConnectModeEnum;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=currentLocationId" })
  currentLocationId?: string;

  @Metadata({ data: "json, name=customerManagedKey" })
  customerManagedKey?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=maintenancePolicy" })
  maintenancePolicy?: MaintenancePolicy;

  @Metadata({ data: "json, name=maintenanceSchedule" })
  maintenanceSchedule?: MaintenanceSchedule;

  @Metadata({ data: "json, name=memorySizeGb" })
  memorySizeGb?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodes", elemType: shared.NodeInfo })
  nodes?: NodeInfo[];

  @Metadata({ data: "json, name=persistenceConfig" })
  persistenceConfig?: PersistenceConfig;

  @Metadata({ data: "json, name=persistenceIamIdentity" })
  persistenceIamIdentity?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=readEndpoint" })
  readEndpoint?: string;

  @Metadata({ data: "json, name=readEndpointPort" })
  readEndpointPort?: number;

  @Metadata({ data: "json, name=readReplicasMode" })
  readReplicasMode?: InstanceReadReplicasModeEnum;

  @Metadata({ data: "json, name=redisConfigs" })
  redisConfigs?: Map<string, string>;

  @Metadata({ data: "json, name=redisVersion" })
  redisVersion?: string;

  @Metadata({ data: "json, name=replicaCount" })
  replicaCount?: number;

  @Metadata({ data: "json, name=reservedIpRange" })
  reservedIpRange?: string;

  @Metadata({ data: "json, name=secondaryIpRange" })
  secondaryIpRange?: string;

  @Metadata({ data: "json, name=serverCaCerts", elemType: shared.TlsCertificate })
  serverCaCerts?: TlsCertificate[];

  @Metadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=suspensionReasons" })
  suspensionReasons?: InstanceSuspensionReasonsEnum[];

  @Metadata({ data: "json, name=tier" })
  tier?: InstanceTierEnum;

  @Metadata({ data: "json, name=transitEncryptionMode" })
  transitEncryptionMode?: InstanceTransitEncryptionModeEnum;
}
