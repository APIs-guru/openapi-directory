import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteRouteRule } from "./grpcrouterouterule";



// GrpcRouteInput
/** 
 * GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed.
**/
export class GrpcRouteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=gateways" })
  gateways?: string[];

  @SpeakeasyMetadata({ data: "json, name=hostnames" })
  hostnames?: string[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=meshes" })
  meshes?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GrpcRouteRouteRule })
  rules?: GrpcRouteRouteRule[];
}


// GrpcRoute
/** 
 * GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed.
**/
export class GrpcRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=gateways" })
  gateways?: string[];

  @SpeakeasyMetadata({ data: "json, name=hostnames" })
  hostnames?: string[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=meshes" })
  meshes?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GrpcRouteRouteRule })
  rules?: GrpcRouteRouteRule[];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
