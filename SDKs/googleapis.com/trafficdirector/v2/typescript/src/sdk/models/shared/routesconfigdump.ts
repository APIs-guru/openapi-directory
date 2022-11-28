import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicRouteConfig } from "./dynamicrouteconfig";
import { StaticRouteConfig } from "./staticrouteconfig";



// RoutesConfigDump
/** 
 * Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.
**/
export class RoutesConfigDump extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicRouteConfigs", elemType: DynamicRouteConfig })
  dynamicRouteConfigs?: DynamicRouteConfig[];

  @SpeakeasyMetadata({ data: "json, name=staticRouteConfigs", elemType: StaticRouteConfig })
  staticRouteConfigs?: StaticRouteConfig[];
}
