import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteCorsPolicy } from "./httproutecorspolicy";
import { HttpRouteDestination } from "./httproutedestination";
import { HttpRouteFaultInjectionPolicy } from "./httproutefaultinjectionpolicy";
import { HttpRouteRedirect } from "./httprouteredirect";
import { HttpRouteHeaderModifier } from "./httprouteheadermodifier";
import { HttpRouteRequestMirrorPolicy } from "./httprouterequestmirrorpolicy";
import { HttpRouteRetryPolicy } from "./httprouteretrypolicy";
import { HttpRouteUrlRewrite } from "./httprouteurlrewrite";



// HttpRouteRouteAction
/** 
 * The specifications for routing traffic and applying associated policies.
**/
export class HttpRouteRouteAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=corsPolicy" })
  corsPolicy?: HttpRouteCorsPolicy;

  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: HttpRouteDestination })
  destinations?: HttpRouteDestination[];

  @SpeakeasyMetadata({ data: "json, name=faultInjectionPolicy" })
  faultInjectionPolicy?: HttpRouteFaultInjectionPolicy;

  @SpeakeasyMetadata({ data: "json, name=redirect" })
  redirect?: HttpRouteRedirect;

  @SpeakeasyMetadata({ data: "json, name=requestHeaderModifier" })
  requestHeaderModifier?: HttpRouteHeaderModifier;

  @SpeakeasyMetadata({ data: "json, name=requestMirrorPolicy" })
  requestMirrorPolicy?: HttpRouteRequestMirrorPolicy;

  @SpeakeasyMetadata({ data: "json, name=responseHeaderModifier" })
  responseHeaderModifier?: HttpRouteHeaderModifier;

  @SpeakeasyMetadata({ data: "json, name=retryPolicy" })
  retryPolicy?: HttpRouteRetryPolicy;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;

  @SpeakeasyMetadata({ data: "json, name=urlRewrite" })
  urlRewrite?: HttpRouteUrlRewrite;
}
