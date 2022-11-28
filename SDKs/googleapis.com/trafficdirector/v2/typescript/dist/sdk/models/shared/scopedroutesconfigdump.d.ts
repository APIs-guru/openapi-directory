import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicScopedRouteConfigs } from "./dynamicscopedrouteconfigs";
import { InlineScopedRouteConfigs } from "./inlinescopedrouteconfigs";
/**
 * Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API.
**/
export declare class ScopedRoutesConfigDump extends SpeakeasyBase {
    dynamicScopedRouteConfigs?: DynamicScopedRouteConfigs[];
    inlineScopedRouteConfigs?: InlineScopedRouteConfigs[];
}
