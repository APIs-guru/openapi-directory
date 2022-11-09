import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NodeBalancerNodeModeEnum {
    Accept = "accept"
,    Reject = "reject"
,    Drain = "drain"
,    Backup = "backup"
}

export enum NodeBalancerNodeStatusEnum {
    Unknown = "unknown"
,    Up = "UP"
,    Down = "DOWN"
}


// NodeBalancerNode
/** 
 * A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
 * 
**/
export class NodeBalancerNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=config_id" })
  configId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: NodeBalancerNodeModeEnum;

  @Metadata({ data: "json, name=nodebalancer_id" })
  nodebalancerId?: number;

  @Metadata({ data: "json, name=status" })
  status?: NodeBalancerNodeStatusEnum;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
