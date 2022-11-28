import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NodeBalancerConfigAlgorithmEnum {
    Roundrobin = "roundrobin",
    Leastconn = "leastconn",
    Source = "source"
}
export declare enum NodeBalancerConfigCheckEnum {
    None = "none",
    Connection = "connection",
    Http = "http",
    HttpBody = "http_body"
}
export declare enum NodeBalancerConfigCipherSuiteEnum {
    Recommended = "recommended",
    Legacy = "legacy"
}
/**
 * A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.
 *
**/
export declare class NodeBalancerConfigNodesStatus extends SpeakeasyBase {
    down?: number;
    up?: number;
}
export declare enum NodeBalancerConfigProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}
export declare enum NodeBalancerConfigProxyProtocolEnum {
    None = "none",
    V1 = "v1",
    V2 = "v2"
}
export declare enum NodeBalancerConfigStickinessEnum {
    None = "none",
    Table = "table",
    HttpCookie = "http_cookie"
}
/**
 * A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
 *
 * NodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.
 *
**/
export declare class NodeBalancerConfig extends SpeakeasyBase {
    algorithm?: NodeBalancerConfigAlgorithmEnum;
    check?: NodeBalancerConfigCheckEnum;
    checkAttempts?: number;
    checkBody?: string;
    checkInterval?: number;
    checkPassive?: boolean;
    checkPath?: string;
    checkTimeout?: number;
    cipherSuite?: NodeBalancerConfigCipherSuiteEnum;
    id?: number;
    nodebalancerId?: number;
    nodesStatus?: NodeBalancerConfigNodesStatus;
    port?: number;
    protocol?: NodeBalancerConfigProtocolEnum;
    proxyProtocol?: NodeBalancerConfigProxyProtocolEnum;
    sslCert?: string;
    sslCommonname?: string;
    sslFingerprint?: string;
    sslKey?: string;
    stickiness?: NodeBalancerConfigStickinessEnum;
}
/**
 * A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
 *
 * NodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.
 *
**/
export declare class NodeBalancerConfigInput extends SpeakeasyBase {
    algorithm?: NodeBalancerConfigAlgorithmEnum;
    check?: NodeBalancerConfigCheckEnum;
    checkAttempts?: number;
    checkBody?: string;
    checkInterval?: number;
    checkPassive?: boolean;
    checkPath?: string;
    checkTimeout?: number;
    cipherSuite?: NodeBalancerConfigCipherSuiteEnum;
    port?: number;
    protocol?: NodeBalancerConfigProtocolEnum;
    proxyProtocol?: NodeBalancerConfigProxyProtocolEnum;
    sslCert?: string;
    sslKey?: string;
    stickiness?: NodeBalancerConfigStickinessEnum;
}
