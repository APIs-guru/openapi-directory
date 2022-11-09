import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointMatcher } from "./endpointmatcher";
import { TrafficPortSelector } from "./trafficportselector";

export enum EndpointPolicyTypeEnum {
    EndpointPolicyTypeUnspecified = "ENDPOINT_POLICY_TYPE_UNSPECIFIED"
,    SidecarProxy = "SIDECAR_PROXY"
,    GrpcServer = "GRPC_SERVER"
}


// EndpointPolicy
/** 
 * EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
**/
export class EndpointPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationPolicy" })
  authorizationPolicy?: string;

  @Metadata({ data: "json, name=clientTlsPolicy" })
  clientTlsPolicy?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endpointMatcher" })
  endpointMatcher?: EndpointMatcher;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serverTlsPolicy" })
  serverTlsPolicy?: string;

  @Metadata({ data: "json, name=trafficPortSelector" })
  trafficPortSelector?: TrafficPortSelector;

  @Metadata({ data: "json, name=type" })
  type?: EndpointPolicyTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
