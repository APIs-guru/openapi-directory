import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpRouteRouteRule } from "./httprouterouterule";


// HttpRoute
/** 
 * HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.
**/
export class HttpRoute extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=rules", elemType: shared.HttpRouteRouteRule })
  rules?: HttpRouteRouteRule[];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
