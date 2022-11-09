import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DynamicRouteConfig } from "./dynamicrouteconfig";
import { StaticRouteConfig } from "./staticrouteconfig";


// RoutesConfigDump
/** 
 * Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.
**/
export class RoutesConfigDump extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicRouteConfigs", elemType: shared.DynamicRouteConfig })
  dynamicRouteConfigs?: DynamicRouteConfig[];

  @Metadata({ data: "json, name=staticRouteConfigs", elemType: shared.StaticRouteConfig })
  staticRouteConfigs?: StaticRouteConfig[];
}
