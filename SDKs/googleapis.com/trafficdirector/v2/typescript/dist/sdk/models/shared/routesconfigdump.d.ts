import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicRouteConfig } from "./dynamicrouteconfig";
import { StaticRouteConfig } from "./staticrouteconfig";
/**
 * Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.
**/
export declare class RoutesConfigDump extends SpeakeasyBase {
    dynamicRouteConfigs?: DynamicRouteConfig[];
    staticRouteConfigs?: StaticRouteConfig[];
}
