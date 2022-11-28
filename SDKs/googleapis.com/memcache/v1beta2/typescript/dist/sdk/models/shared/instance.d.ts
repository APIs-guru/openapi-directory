import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceMessage } from "./instancemessage";
import { GoogleCloudMemcacheV1beta2MaintenancePolicyInput } from "./googlecloudmemcachev1beta2maintenancepolicy";
import { NodeConfig } from "./nodeconfig";
import { MemcacheParametersInput } from "./memcacheparameters";
import { GoogleCloudMemcacheV1beta2MaintenancePolicy } from "./googlecloudmemcachev1beta2maintenancepolicy";
import { MaintenanceSchedule } from "./maintenanceschedule";
import { Node } from "./node";
import { MemcacheParameters } from "./memcacheparameters";
export declare enum InstanceMemcacheVersionEnum {
    MemcacheVersionUnspecified = "MEMCACHE_VERSION_UNSPECIFIED",
    Memcache15 = "MEMCACHE_1_5"
}
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Updating = "UPDATING",
    Deleting = "DELETING",
    PerformingMaintenance = "PERFORMING_MAINTENANCE"
}
/**
 * A Memorystore for Memcached instance
**/
export declare class InstanceInput extends SpeakeasyBase {
    authorizedNetwork?: string;
    displayName?: string;
    instanceMessages?: InstanceMessage[];
    labels?: Map<string, string>;
    maintenancePolicy?: GoogleCloudMemcacheV1beta2MaintenancePolicyInput;
    memcacheVersion?: InstanceMemcacheVersionEnum;
    name?: string;
    nodeConfig?: NodeConfig;
    nodeCount?: number;
    parameters?: MemcacheParametersInput;
    zones?: string[];
}
/**
 * A Memorystore for Memcached instance
**/
export declare class Instance extends SpeakeasyBase {
    authorizedNetwork?: string;
    createTime?: string;
    discoveryEndpoint?: string;
    displayName?: string;
    instanceMessages?: InstanceMessage[];
    labels?: Map<string, string>;
    maintenancePolicy?: GoogleCloudMemcacheV1beta2MaintenancePolicy;
    maintenanceSchedule?: MaintenanceSchedule;
    memcacheFullVersion?: string;
    memcacheNodes?: Node[];
    memcacheVersion?: InstanceMemcacheVersionEnum;
    name?: string;
    nodeConfig?: NodeConfig;
    nodeCount?: number;
    parameters?: MemcacheParameters;
    state?: InstanceStateEnum;
    updateAvailable?: boolean;
    updateTime?: string;
    zones?: string[];
}
