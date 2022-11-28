import { SpeakeasyBase } from "../../../internal/utils";
import { LkeNodeStatus } from "./lkenodestatus";
export declare enum LkeNodePoolDisksTypeEnum {
    Raw = "raw",
    Ext4 = "ext4"
}
/**
 * The values to assign to each partition in this Node Pool's custom disk layout.
 *
**/
export declare class LkeNodePoolDisks extends SpeakeasyBase {
    size?: number;
    type?: LkeNodePoolDisksTypeEnum;
}
/**
 * The set of Node Pools which are members of the Kubernetes cluster. Node Pools consist of a Linode type, the number of Linodes to deploy of that type, and additional status information.
 *
**/
export declare class LkeNodePool extends SpeakeasyBase {
    count?: number;
    disks?: LkeNodePoolDisks[];
    id?: number;
    nodes?: LkeNodeStatus[];
    tags?: string[];
    type?: string;
}
