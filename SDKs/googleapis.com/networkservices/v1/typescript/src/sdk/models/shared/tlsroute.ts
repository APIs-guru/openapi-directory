import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TlsRouteRouteRule } from "./tlsrouterouterule";


// TlsRoute
/** 
 * TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.
**/
export class TlsRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=gateways" })
  gateways?: string[];

  @Metadata({ data: "json, name=meshes" })
  meshes?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.TlsRouteRouteRule })
  rules?: TlsRouteRouteRule[];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
