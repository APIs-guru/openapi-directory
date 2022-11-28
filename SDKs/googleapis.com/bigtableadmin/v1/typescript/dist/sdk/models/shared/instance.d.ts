import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InstanceStateEnum {
    StateNotKnown = "STATE_NOT_KNOWN",
    Ready = "READY",
    Creating = "CREATING"
}
export declare enum InstanceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Production = "PRODUCTION",
    Development = "DEVELOPMENT"
}
/**
 * A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
**/
export declare class Instance extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    state?: InstanceStateEnum;
    type?: InstanceTypeEnum;
}
/**
 * A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
**/
export declare class InstanceInput extends SpeakeasyBase {
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    type?: InstanceTypeEnum;
}
