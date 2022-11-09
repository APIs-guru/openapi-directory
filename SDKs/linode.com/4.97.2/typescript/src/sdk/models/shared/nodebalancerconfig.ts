import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NodeBalancerConfigAlgorithmEnum {
    Roundrobin = "roundrobin"
,    Leastconn = "leastconn"
,    Source = "source"
}

export enum NodeBalancerConfigCheckEnum {
    None = "none"
,    Connection = "connection"
,    Http = "http"
,    HttpBody = "http_body"
}

export enum NodeBalancerConfigCipherSuiteEnum {
    Recommended = "recommended"
,    Legacy = "legacy"
}


// NodeBalancerConfigNodesStatus
/** 
 * A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.
 * 
**/
export class NodeBalancerConfigNodesStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=down" })
  down?: number;

  @Metadata({ data: "json, name=up" })
  up?: number;
}

export enum NodeBalancerConfigProtocolEnum {
    Http = "http"
,    Https = "https"
,    Tcp = "tcp"
}

export enum NodeBalancerConfigProxyProtocolEnum {
    None = "none"
,    V1 = "v1"
,    V2 = "v2"
}

export enum NodeBalancerConfigStickinessEnum {
    None = "none"
,    Table = "table"
,    HttpCookie = "http_cookie"
}


// NodeBalancerConfig
/** 
 * A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
 * 
 * NodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.
 * 
**/
export class NodeBalancerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: NodeBalancerConfigAlgorithmEnum;

  @Metadata({ data: "json, name=check" })
  check?: NodeBalancerConfigCheckEnum;

  @Metadata({ data: "json, name=check_attempts" })
  checkAttempts?: number;

  @Metadata({ data: "json, name=check_body" })
  checkBody?: string;

  @Metadata({ data: "json, name=check_interval" })
  checkInterval?: number;

  @Metadata({ data: "json, name=check_passive" })
  checkPassive?: boolean;

  @Metadata({ data: "json, name=check_path" })
  checkPath?: string;

  @Metadata({ data: "json, name=check_timeout" })
  checkTimeout?: number;

  @Metadata({ data: "json, name=cipher_suite" })
  cipherSuite?: NodeBalancerConfigCipherSuiteEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=nodebalancer_id" })
  nodebalancerId?: number;

  @Metadata({ data: "json, name=nodes_status" })
  nodesStatus?: NodeBalancerConfigNodesStatus;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: NodeBalancerConfigProtocolEnum;

  @Metadata({ data: "json, name=proxy_protocol" })
  proxyProtocol?: NodeBalancerConfigProxyProtocolEnum;

  @Metadata({ data: "json, name=ssl_cert" })
  sslCert?: string;

  @Metadata({ data: "json, name=ssl_commonname" })
  sslCommonname?: string;

  @Metadata({ data: "json, name=ssl_fingerprint" })
  sslFingerprint?: string;

  @Metadata({ data: "json, name=ssl_key" })
  sslKey?: string;

  @Metadata({ data: "json, name=stickiness" })
  stickiness?: NodeBalancerConfigStickinessEnum;
}
