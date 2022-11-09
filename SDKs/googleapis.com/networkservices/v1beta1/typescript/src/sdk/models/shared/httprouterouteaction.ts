import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpRouteCorsPolicy } from "./httproutecorspolicy";
import { HttpRouteDestination } from "./httproutedestination";
import { HttpRouteFaultInjectionPolicy } from "./httproutefaultinjectionpolicy";
import { HttpRouteRedirect } from "./httprouteredirect";
import { HttpRouteHeaderModifier } from "./httprouteheadermodifier";
import { HttpRouteRequestMirrorPolicy } from "./httprouterequestmirrorpolicy";
import { HttpRouteHeaderModifier } from "./httprouteheadermodifier";
import { HttpRouteRetryPolicy } from "./httprouteretrypolicy";
import { HttpRouteUrlRewrite } from "./httprouteurlrewrite";


// HttpRouteRouteAction
/** 
 * The specifications for routing traffic and applying associated policies.
**/
export class HttpRouteRouteAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=corsPolicy" })
  corsPolicy?: HttpRouteCorsPolicy;

  @Metadata({ data: "json, name=destinations", elemType: shared.HttpRouteDestination })
  destinations?: HttpRouteDestination[];

  @Metadata({ data: "json, name=faultInjectionPolicy" })
  faultInjectionPolicy?: HttpRouteFaultInjectionPolicy;

  @Metadata({ data: "json, name=redirect" })
  redirect?: HttpRouteRedirect;

  @Metadata({ data: "json, name=requestHeaderModifier" })
  requestHeaderModifier?: HttpRouteHeaderModifier;

  @Metadata({ data: "json, name=requestMirrorPolicy" })
  requestMirrorPolicy?: HttpRouteRequestMirrorPolicy;

  @Metadata({ data: "json, name=responseHeaderModifier" })
  responseHeaderModifier?: HttpRouteHeaderModifier;

  @Metadata({ data: "json, name=retryPolicy" })
  retryPolicy?: HttpRouteRetryPolicy;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;

  @Metadata({ data: "json, name=urlRewrite" })
  urlRewrite?: HttpRouteUrlRewrite;
}
