import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeBalancerTransfer
/** 
 * Information about the amount of transfer this NodeBalancer has had so far this month.
 * 
**/
export class NodeBalancerTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=in" })
  in?: number;

  @SpeakeasyMetadata({ data: "json, name=out" })
  out?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


// NodeBalancer
/** 
 * Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
 * 
**/
export class NodeBalancer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_conn_throttle" })
  clientConnThrottle?: number;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4?: string;

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=transfer" })
  transfer?: NodeBalancerTransfer;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}


// NodeBalancerInput
/** 
 * Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
 * 
**/
export class NodeBalancerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_conn_throttle" })
  clientConnThrottle?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
