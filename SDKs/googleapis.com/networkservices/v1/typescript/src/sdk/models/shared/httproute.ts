import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteRouteRule } from "./httprouterouterule";



// HttpRoute
/** 
 * HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.
**/
export class HttpRoute extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: HttpRouteRouteRule })
  rules?: HttpRouteRouteRule[];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// HttpRouteInput
/** 
 * HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.
**/
export class HttpRouteInput extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: HttpRouteRouteRule })
  rules?: HttpRouteRouteRule[];
}
