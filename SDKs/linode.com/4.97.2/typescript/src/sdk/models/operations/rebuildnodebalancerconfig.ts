import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RebuildNodeBalancerConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}

export enum RebuildNodeBalancerConfigRequestBodyAlgorithmEnum {
    Roundrobin = "roundrobin",
    Leastconn = "leastconn",
    Source = "source"
}

export enum RebuildNodeBalancerConfigRequestBodyCheckEnum {
    None = "none",
    Connection = "connection",
    Http = "http",
    HttpBody = "http_body"
}

export enum RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum {
    Recommended = "recommended",
    Legacy = "legacy"
}

export enum RebuildNodeBalancerConfigRequestBodyProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}

export enum RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum {
    None = "none",
    V1 = "v1",
    V2 = "v2"
}

export enum RebuildNodeBalancerConfigRequestBodyStickinessEnum {
    None = "none",
    Table = "table",
    HttpCookie = "http_cookie"
}


export class RebuildNodeBalancerConfigRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: RebuildNodeBalancerConfigRequestBodyAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=check" })
  check?: RebuildNodeBalancerConfigRequestBodyCheckEnum;

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
  cipherSuite?: RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum;

  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: shared.NodeBalancerNodeInput })
  nodes?: shared.NodeBalancerNodeInput[];

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: RebuildNodeBalancerConfigRequestBodyProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=proxy_protocol" })
  proxyProtocol?: RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=ssl_cert" })
  sslCert?: string;

  @SpeakeasyMetadata({ data: "json, name=ssl_key" })
  sslKey?: string;

  @SpeakeasyMetadata({ data: "json, name=stickiness" })
  stickiness?: RebuildNodeBalancerConfigRequestBodyStickinessEnum;
}


export class RebuildNodeBalancerConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class RebuildNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class RebuildNodeBalancerConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RebuildNodeBalancerConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RebuildNodeBalancerConfigRequestBodyInput;

  @SpeakeasyMetadata()
  security: RebuildNodeBalancerConfigSecurity;
}


export class RebuildNodeBalancerConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nodeBalancer?: shared.NodeBalancer;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rebuildNodeBalancerConfigDefaultApplicationJsonObject?: RebuildNodeBalancerConfigDefaultApplicationJson;
}
