import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RebuildNodeBalancerConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}

export enum RebuildNodeBalancerConfigRequestBodyAlgorithmEnum {
    Roundrobin = "roundrobin"
,    Leastconn = "leastconn"
,    Source = "source"
}

export enum RebuildNodeBalancerConfigRequestBodyCheckEnum {
    None = "none"
,    Connection = "connection"
,    Http = "http"
,    HttpBody = "http_body"
}

export enum RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum {
    Recommended = "recommended"
,    Legacy = "legacy"
}


// RebuildNodeBalancerConfigRequestBodyNodesStatus
/** 
 * A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.
 * 
**/
export class RebuildNodeBalancerConfigRequestBodyNodesStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=down" })
  down?: number;

  @Metadata({ data: "json, name=up" })
  up?: number;
}

export enum RebuildNodeBalancerConfigRequestBodyProtocolEnum {
    Http = "http"
,    Https = "https"
,    Tcp = "tcp"
}

export enum RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum {
    None = "none"
,    V1 = "v1"
,    V2 = "v2"
}

export enum RebuildNodeBalancerConfigRequestBodyStickinessEnum {
    None = "none"
,    Table = "table"
,    HttpCookie = "http_cookie"
}


export class RebuildNodeBalancerConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: RebuildNodeBalancerConfigRequestBodyAlgorithmEnum;

  @Metadata({ data: "json, name=check" })
  check?: RebuildNodeBalancerConfigRequestBodyCheckEnum;

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
  cipherSuite?: RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=nodebalancer_id" })
  nodebalancerId?: number;

  @Metadata({ data: "json, name=nodes", elemType: shared.NodeBalancerNode })
  nodes?: shared.NodeBalancerNode[];

  @Metadata({ data: "json, name=nodes_status" })
  nodesStatus?: RebuildNodeBalancerConfigRequestBodyNodesStatus;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: RebuildNodeBalancerConfigRequestBodyProtocolEnum;

  @Metadata({ data: "json, name=proxy_protocol" })
  proxyProtocol?: RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum;

  @Metadata({ data: "json, name=ssl_cert" })
  sslCert?: string;

  @Metadata({ data: "json, name=ssl_commonname" })
  sslCommonname?: string;

  @Metadata({ data: "json, name=ssl_fingerprint" })
  sslFingerprint?: string;

  @Metadata({ data: "json, name=ssl_key" })
  sslKey?: string;

  @Metadata({ data: "json, name=stickiness" })
  stickiness?: RebuildNodeBalancerConfigRequestBodyStickinessEnum;
}


export class RebuildNodeBalancerConfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class RebuildNodeBalancerConfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RebuildNodeBalancerConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: RebuildNodeBalancerConfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: RebuildNodeBalancerConfigSecurityOption2;
}


export class RebuildNodeBalancerConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RebuildNodeBalancerConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RebuildNodeBalancerConfigRequestBody;

  @Metadata()
  security: RebuildNodeBalancerConfigSecurity;
}


export class RebuildNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class RebuildNodeBalancerConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nodeBalancer?: shared.NodeBalancer;

  @Metadata()
  statusCode: number;

  @Metadata()
  rebuildNodeBalancerConfigDefaultApplicationJsonObject?: RebuildNodeBalancerConfigDefaultApplicationJson;
}
