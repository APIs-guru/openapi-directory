import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TcpRouteRouteRule } from "./tcprouterouterule";



// TcpRouteInput
/** 
 * TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource.
**/
export class TcpRouteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=gateways" })
  gateways?: string[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=meshes" })
  meshes?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: TcpRouteRouteRule })
  rules?: TcpRouteRouteRule[];
}


// TcpRoute
/** 
 * TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource.
**/
export class TcpRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=gateways" })
  gateways?: string[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=meshes" })
  meshes?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: TcpRouteRouteRule })
  rules?: TcpRouteRouteRule[];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
