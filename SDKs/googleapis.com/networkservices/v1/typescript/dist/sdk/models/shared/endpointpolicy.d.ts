import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointMatcher } from "./endpointmatcher";
import { TrafficPortSelector } from "./trafficportselector";
export declare enum EndpointPolicyTypeEnum {
    EndpointPolicyTypeUnspecified = "ENDPOINT_POLICY_TYPE_UNSPECIFIED",
    SidecarProxy = "SIDECAR_PROXY",
    GrpcServer = "GRPC_SERVER"
}
/**
 * EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
**/
export declare class EndpointPolicyInput extends SpeakeasyBase {
    authorizationPolicy?: string;
    clientTlsPolicy?: string;
    description?: string;
    endpointMatcher?: EndpointMatcher;
    labels?: Map<string, string>;
    name?: string;
    serverTlsPolicy?: string;
    trafficPortSelector?: TrafficPortSelector;
    type?: EndpointPolicyTypeEnum;
}
/**
 * EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
**/
export declare class EndpointPolicy extends SpeakeasyBase {
    authorizationPolicy?: string;
    clientTlsPolicy?: string;
    createTime?: string;
    description?: string;
    endpointMatcher?: EndpointMatcher;
    labels?: Map<string, string>;
    name?: string;
    serverTlsPolicy?: string;
    trafficPortSelector?: TrafficPortSelector;
    type?: EndpointPolicyTypeEnum;
    updateTime?: string;
}
