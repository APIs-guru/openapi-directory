import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TcpRouteRouteRule } from "./tcprouterouterule";


// TcpRoute
/** 
 * TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource.
**/
export class TcpRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=gateways" })
  gateways?: string[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=meshes" })
  meshes?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.TcpRouteRouteRule })
  rules?: TcpRouteRouteRule[];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
