import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointMatcher } from "./endpointmatcher";
import { TrafficPortSelector } from "./trafficportselector";


export enum EndpointPolicyTypeEnum {
    EndpointPolicyTypeUnspecified = "ENDPOINT_POLICY_TYPE_UNSPECIFIED",
    SidecarProxy = "SIDECAR_PROXY",
    GrpcServer = "GRPC_SERVER"
}


// EndpointPolicyInput
/** 
 * EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
**/
export class EndpointPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationPolicy" })
  authorizationPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=clientTlsPolicy" })
  clientTlsPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointMatcher" })
  endpointMatcher?: EndpointMatcher;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serverTlsPolicy" })
  serverTlsPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=trafficPortSelector" })
  trafficPortSelector?: TrafficPortSelector;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EndpointPolicyTypeEnum;
}


// EndpointPolicy
/** 
 * EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
**/
export class EndpointPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationPolicy" })
  authorizationPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=clientTlsPolicy" })
  clientTlsPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointMatcher" })
  endpointMatcher?: EndpointMatcher;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serverTlsPolicy" })
  serverTlsPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=trafficPortSelector" })
  trafficPortSelector?: TrafficPortSelector;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EndpointPolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
