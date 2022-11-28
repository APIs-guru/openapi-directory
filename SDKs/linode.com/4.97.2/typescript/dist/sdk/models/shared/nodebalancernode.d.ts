import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NodeBalancerNodeModeEnum {
    Accept = "accept",
    Reject = "reject",
    Drain = "drain",
    Backup = "backup"
}
export declare enum NodeBalancerNodeStatusEnum {
    Unknown = "unknown",
    Up = "UP",
    Down = "DOWN"
}
/**
 * A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
 *
**/
export declare class NodeBalancerNode extends SpeakeasyBase {
    address?: string;
    configId?: number;
    id?: number;
    label?: string;
    mode?: NodeBalancerNodeModeEnum;
    nodebalancerId?: number;
    status?: NodeBalancerNodeStatusEnum;
    weight?: number;
}
/**
 * A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
 *
**/
export declare class NodeBalancerNodeInput extends SpeakeasyBase {
    address?: string;
    label?: string;
    mode?: NodeBalancerNodeModeEnum;
    weight?: number;
}
