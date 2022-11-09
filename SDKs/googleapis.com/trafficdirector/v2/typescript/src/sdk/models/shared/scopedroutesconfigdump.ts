import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DynamicScopedRouteConfigs } from "./dynamicscopedrouteconfigs";
import { InlineScopedRouteConfigs } from "./inlinescopedrouteconfigs";


// ScopedRoutesConfigDump
/** 
 * Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API.
**/
export class ScopedRoutesConfigDump extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicScopedRouteConfigs", elemType: shared.DynamicScopedRouteConfigs })
  dynamicScopedRouteConfigs?: DynamicScopedRouteConfigs[];

  @Metadata({ data: "json, name=inlineScopedRouteConfigs", elemType: shared.InlineScopedRouteConfigs })
  inlineScopedRouteConfigs?: InlineScopedRouteConfigs[];
}
