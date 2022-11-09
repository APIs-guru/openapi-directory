import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodeBalancerTransfer
/** 
 * Information about the amount of transfer this NodeBalancer has had so far this month.
 * 
**/
export class NodeBalancerTransfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=in" })
  in?: number;

  @Metadata({ data: "json, name=out" })
  out?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


// NodeBalancer
/** 
 * Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
 * 
**/
export class NodeBalancer extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_conn_throttle" })
  clientConnThrottle?: number;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=ipv4" })
  ipv4?: string;

  @Metadata({ data: "json, name=ipv6" })
  ipv6?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=transfer" })
  transfer?: NodeBalancerTransfer;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
