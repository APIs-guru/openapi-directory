import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GrpcRouteRouteRule } from "./grpcrouterouterule";


// GrpcRoute
/** 
 * GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed.
**/
export class GrpcRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=gateways" })
  gateways?: string[];

  @Metadata({ data: "json, name=hostnames" })
  hostnames?: string[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=meshes" })
  meshes?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.GrpcRouteRouteRule })
  rules?: GrpcRouteRouteRule[];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
