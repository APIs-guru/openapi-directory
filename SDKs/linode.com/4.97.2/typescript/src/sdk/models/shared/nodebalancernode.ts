import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NodeBalancerNodeModeEnum {
    Accept = "accept",
    Reject = "reject",
    Drain = "drain",
    Backup = "backup"
}

export enum NodeBalancerNodeStatusEnum {
    Unknown = "unknown",
    Up = "UP",
    Down = "DOWN"
}


// NodeBalancerNode
/** 
 * A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
 * 
**/
export class NodeBalancerNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=config_id" })
  configId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: NodeBalancerNodeModeEnum;

  @SpeakeasyMetadata({ data: "json, name=nodebalancer_id" })
  nodebalancerId?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: NodeBalancerNodeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}


// NodeBalancerNodeInput
/** 
 * A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
 * 
**/
export class NodeBalancerNodeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: NodeBalancerNodeModeEnum;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
