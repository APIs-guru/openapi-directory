import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicScopedRouteConfigs } from "./dynamicscopedrouteconfigs";
import { InlineScopedRouteConfigs } from "./inlinescopedrouteconfigs";



// ScopedRoutesConfigDump
/** 
 * Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API.
**/
export class ScopedRoutesConfigDump extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicScopedRouteConfigs", elemType: DynamicScopedRouteConfigs })
  dynamicScopedRouteConfigs?: DynamicScopedRouteConfigs[];

  @SpeakeasyMetadata({ data: "json, name=inlineScopedRouteConfigs", elemType: InlineScopedRouteConfigs })
  inlineScopedRouteConfigs?: InlineScopedRouteConfigs[];
}
