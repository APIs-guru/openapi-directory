import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceMessage } from "./instancemessage";
import { GoogleCloudMemcacheV1beta2MaintenancePolicy } from "./googlecloudmemcachev1beta2maintenancepolicy";
import { MaintenanceSchedule } from "./maintenanceschedule";
import { Node } from "./node";
import { NodeConfig } from "./nodeconfig";
import { MemcacheParameters } from "./memcacheparameters";

export enum InstanceMemcacheVersionEnum {
    MemcacheVersionUnspecified = "MEMCACHE_VERSION_UNSPECIFIED"
,    Memcache15 = "MEMCACHE_1_5"
}

export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    PerformingMaintenance = "PERFORMING_MAINTENANCE"
}


// Instance
/** 
 * A Memorystore for Memcached instance
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=discoveryEndpoint" })
  discoveryEndpoint?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=instanceMessages", elemType: shared.InstanceMessage })
  instanceMessages?: InstanceMessage[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=maintenancePolicy" })
  maintenancePolicy?: GoogleCloudMemcacheV1beta2MaintenancePolicy;

  @Metadata({ data: "json, name=maintenanceSchedule" })
  maintenanceSchedule?: MaintenanceSchedule;

  @Metadata({ data: "json, name=memcacheFullVersion" })
  memcacheFullVersion?: string;

  @Metadata({ data: "json, name=memcacheNodes", elemType: shared.Node })
  memcacheNodes?: Node[];

  @Metadata({ data: "json, name=memcacheVersion" })
  memcacheVersion?: InstanceMemcacheVersionEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodeConfig" })
  nodeConfig?: NodeConfig;

  @Metadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @Metadata({ data: "json, name=parameters" })
  parameters?: MemcacheParameters;

  @Metadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @Metadata({ data: "json, name=updateAvailable" })
  updateAvailable?: boolean;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=zones" })
  zones?: string[];
}
