import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NodeBalancerConfigAlgorithmEnum {
    Roundrobin = "roundrobin",
    Leastconn = "leastconn",
    Source = "source"
}

export enum NodeBalancerConfigCheckEnum {
    None = "none",
    Connection = "connection",
    Http = "http",
    HttpBody = "http_body"
}

export enum NodeBalancerConfigCipherSuiteEnum {
    Recommended = "recommended",
    Legacy = "legacy"
}


// NodeBalancerConfigNodesStatus
/** 
 * A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.
 * 
**/
export class NodeBalancerConfigNodesStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=down" })
  down?: number;

  @SpeakeasyMetadata({ data: "json, name=up" })
  up?: number;
}

export enum NodeBalancerConfigProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}

export enum NodeBalancerConfigProxyProtocolEnum {
    None = "none",
    V1 = "v1",
    V2 = "v2"
}

export enum NodeBalancerConfigStickinessEnum {
    None = "none",
    Table = "table",
    HttpCookie = "http_cookie"
}


// NodeBalancerConfig
/** 
 * A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
 * 
 * NodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.
 * 
**/
export class NodeBalancerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: NodeBalancerConfigAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=check" })
  check?: NodeBalancerConfigCheckEnum;

  @SpeakeasyMetadata({ data: "json, name=check_attempts" })
  checkAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=check_body" })
  checkBody?: string;

  @SpeakeasyMetadata({ data: "json, name=check_interval" })
  checkInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=check_passive" })
  checkPassive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=check_path" })
  checkPath?: string;

  @SpeakeasyMetadata({ data: "json, name=check_timeout" })
  checkTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=cipher_suite" })
  cipherSuite?: NodeBalancerConfigCipherSuiteEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=nodebalancer_id" })
  nodebalancerId?: number;

  @SpeakeasyMetadata({ data: "json, name=nodes_status" })
  nodesStatus?: NodeBalancerConfigNodesStatus;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: NodeBalancerConfigProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=proxy_protocol" })
  proxyProtocol?: NodeBalancerConfigProxyProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=ssl_cert" })
  sslCert?: string;

  @SpeakeasyMetadata({ data: "json, name=ssl_commonname" })
  sslCommonname?: string;

  @SpeakeasyMetadata({ data: "json, name=ssl_fingerprint" })
  sslFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=ssl_key" })
  sslKey?: string;

  @SpeakeasyMetadata({ data: "json, name=stickiness" })
  stickiness?: NodeBalancerConfigStickinessEnum;
}


// NodeBalancerConfigInput
/** 
 * A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
 * 
 * NodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.
 * 
**/
export class NodeBalancerConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: NodeBalancerConfigAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=check" })
  check?: NodeBalancerConfigCheckEnum;

  @SpeakeasyMetadata({ data: "json, name=check_attempts" })
  checkAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=check_body" })
  checkBody?: string;

  @SpeakeasyMetadata({ data: "json, name=check_interval" })
  checkInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=check_passive" })
  checkPassive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=check_path" })
  checkPath?: string;

  @SpeakeasyMetadata({ data: "json, name=check_timeout" })
  checkTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=cipher_suite" })
  cipherSuite?: NodeBalancerConfigCipherSuiteEnum;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: NodeBalancerConfigProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=proxy_protocol" })
  proxyProtocol?: NodeBalancerConfigProxyProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=ssl_cert" })
  sslCert?: string;

  @SpeakeasyMetadata({ data: "json, name=ssl_key" })
  sslKey?: string;

  @SpeakeasyMetadata({ data: "json, name=stickiness" })
  stickiness?: NodeBalancerConfigStickinessEnum;
}
