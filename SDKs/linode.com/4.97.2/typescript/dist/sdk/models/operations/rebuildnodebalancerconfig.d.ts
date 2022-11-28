import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RebuildNodeBalancerConfigPathParams extends SpeakeasyBase {
    configId: number;
    nodeBalancerId: number;
}
export declare enum RebuildNodeBalancerConfigRequestBodyAlgorithmEnum {
    Roundrobin = "roundrobin",
    Leastconn = "leastconn",
    Source = "source"
}
export declare enum RebuildNodeBalancerConfigRequestBodyCheckEnum {
    None = "none",
    Connection = "connection",
    Http = "http",
    HttpBody = "http_body"
}
export declare enum RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum {
    Recommended = "recommended",
    Legacy = "legacy"
}
export declare enum RebuildNodeBalancerConfigRequestBodyProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}
export declare enum RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum {
    None = "none",
    V1 = "v1",
    V2 = "v2"
}
export declare enum RebuildNodeBalancerConfigRequestBodyStickinessEnum {
    None = "none",
    Table = "table",
    HttpCookie = "http_cookie"
}
export declare class RebuildNodeBalancerConfigRequestBodyInput extends SpeakeasyBase {
    algorithm?: RebuildNodeBalancerConfigRequestBodyAlgorithmEnum;
    check?: RebuildNodeBalancerConfigRequestBodyCheckEnum;
    checkAttempts?: number;
    checkBody?: string;
    checkInterval?: number;
    checkPassive?: boolean;
    checkPath?: string;
    checkTimeout?: number;
    cipherSuite?: RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum;
    nodes?: shared.NodeBalancerNodeInput[];
    port?: number;
    protocol?: RebuildNodeBalancerConfigRequestBodyProtocolEnum;
    proxyProtocol?: RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum;
    sslCert?: string;
    sslKey?: string;
    stickiness?: RebuildNodeBalancerConfigRequestBodyStickinessEnum;
}
export declare class RebuildNodeBalancerConfigSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class RebuildNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class RebuildNodeBalancerConfigRequest extends SpeakeasyBase {
    pathParams: RebuildNodeBalancerConfigPathParams;
    request: RebuildNodeBalancerConfigRequestBodyInput;
    security: RebuildNodeBalancerConfigSecurity;
}
export declare class RebuildNodeBalancerConfigResponse extends SpeakeasyBase {
    contentType: string;
    nodeBalancer?: shared.NodeBalancer;
    statusCode: number;
    rebuildNodeBalancerConfigDefaultApplicationJsonObject?: RebuildNodeBalancerConfigDefaultApplicationJson;
}
