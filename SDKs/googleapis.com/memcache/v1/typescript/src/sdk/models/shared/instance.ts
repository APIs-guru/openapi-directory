import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceMessage } from "./instancemessage";
import { GoogleCloudMemcacheV1MaintenancePolicyInput } from "./googlecloudmemcachev1maintenancepolicy";
import { NodeConfig } from "./nodeconfig";
import { MemcacheParametersInput } from "./memcacheparameters";
import { GoogleCloudMemcacheV1MaintenancePolicy } from "./googlecloudmemcachev1maintenancepolicy";
import { MaintenanceSchedule } from "./maintenanceschedule";
import { Node } from "./node";
import { MemcacheParameters } from "./memcacheparameters";


export enum InstanceMemcacheVersionEnum {
    MemcacheVersionUnspecified = "MEMCACHE_VERSION_UNSPECIFIED",
    Memcache15 = "MEMCACHE_1_5"
}

export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Updating = "UPDATING",
    Deleting = "DELETING",
    PerformingMaintenance = "PERFORMING_MAINTENANCE"
}


// InstanceInput
/** 
 * A Memorystore for Memcached instance
**/
export class InstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceMessages", elemType: InstanceMessage })
  instanceMessages?: InstanceMessage[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=maintenancePolicy" })
  maintenancePolicy?: GoogleCloudMemcacheV1MaintenancePolicyInput;

  @SpeakeasyMetadata({ data: "json, name=memcacheVersion" })
  memcacheVersion?: InstanceMemcacheVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeConfig" })
  nodeConfig?: NodeConfig;

  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: MemcacheParametersInput;

  @SpeakeasyMetadata({ data: "json, name=zones" })
  zones?: string[];
}


// Instance
/** 
 * A Memorystore for Memcached instance
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=discoveryEndpoint" })
  discoveryEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceMessages", elemType: InstanceMessage })
  instanceMessages?: InstanceMessage[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=maintenancePolicy" })
  maintenancePolicy?: GoogleCloudMemcacheV1MaintenancePolicy;

  @SpeakeasyMetadata({ data: "json, name=maintenanceSchedule" })
  maintenanceSchedule?: MaintenanceSchedule;

  @SpeakeasyMetadata({ data: "json, name=memcacheFullVersion" })
  memcacheFullVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=memcacheNodes", elemType: Node })
  memcacheNodes?: Node[];

  @SpeakeasyMetadata({ data: "json, name=memcacheVersion" })
  memcacheVersion?: InstanceMemcacheVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeConfig" })
  nodeConfig?: NodeConfig;

  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: MemcacheParameters;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=zones" })
  zones?: string[];
}
