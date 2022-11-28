import { SpeakeasyBase } from "../../../internal/utils";
import { FreeInstanceMetadataInput } from "./freeinstancemetadata";
import { FreeInstanceMetadata } from "./freeinstancemetadata";
export declare enum InstanceInstanceTypeEnum {
    InstanceTypeUnspecified = "INSTANCE_TYPE_UNSPECIFIED",
    Provisioned = "PROVISIONED",
    FreeInstance = "FREE_INSTANCE"
}
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY"
}
/**
 * An isolated set of Cloud Spanner resources on which databases can be hosted.
**/
export declare class InstanceInput extends SpeakeasyBase {
    config?: string;
    displayName?: string;
    endpointUris?: string[];
    freeInstanceMetadata?: FreeInstanceMetadataInput;
    instanceType?: InstanceInstanceTypeEnum;
    labels?: Map<string, string>;
    name?: string;
    nodeCount?: number;
    processingUnits?: number;
}
/**
 * An isolated set of Cloud Spanner resources on which databases can be hosted.
**/
export declare class Instance extends SpeakeasyBase {
    config?: string;
    createTime?: string;
    displayName?: string;
    endpointUris?: string[];
    freeInstanceMetadata?: FreeInstanceMetadata;
    instanceType?: InstanceInstanceTypeEnum;
    labels?: Map<string, string>;
    name?: string;
    nodeCount?: number;
    processingUnits?: number;
    state?: InstanceStateEnum;
    updateTime?: string;
}
