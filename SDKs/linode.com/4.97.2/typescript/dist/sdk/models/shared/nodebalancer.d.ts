import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the amount of transfer this NodeBalancer has had so far this month.
 *
**/
export declare class NodeBalancerTransfer extends SpeakeasyBase {
    in?: number;
    out?: number;
    total?: number;
}
/**
 * Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
 *
**/
export declare class NodeBalancer extends SpeakeasyBase {
    clientConnThrottle?: number;
    created?: Date;
    hostname?: string;
    id?: number;
    ipv4?: string;
    ipv6?: string;
    label?: string;
    region?: string;
    tags?: string[];
    transfer?: NodeBalancerTransfer;
    updated?: Date;
}
/**
 * Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
 *
**/
export declare class NodeBalancerInput extends SpeakeasyBase {
    clientConnThrottle?: number;
    label?: string;
    tags?: string[];
}
