import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteCorsPolicy } from "./httproutecorspolicy";
import { HttpRouteDestination } from "./httproutedestination";
import { HttpRouteFaultInjectionPolicy } from "./httproutefaultinjectionpolicy";
import { HttpRouteRedirect } from "./httprouteredirect";
import { HttpRouteHeaderModifier } from "./httprouteheadermodifier";
import { HttpRouteRequestMirrorPolicy } from "./httprouterequestmirrorpolicy";
import { HttpRouteRetryPolicy } from "./httprouteretrypolicy";
import { HttpRouteUrlRewrite } from "./httprouteurlrewrite";
/**
 * The specifications for routing traffic and applying associated policies.
**/
export declare class HttpRouteRouteAction extends SpeakeasyBase {
    corsPolicy?: HttpRouteCorsPolicy;
    destinations?: HttpRouteDestination[];
    faultInjectionPolicy?: HttpRouteFaultInjectionPolicy;
    redirect?: HttpRouteRedirect;
    requestHeaderModifier?: HttpRouteHeaderModifier;
    requestMirrorPolicy?: HttpRouteRequestMirrorPolicy;
    responseHeaderModifier?: HttpRouteHeaderModifier;
    retryPolicy?: HttpRouteRetryPolicy;
    timeout?: string;
    urlRewrite?: HttpRouteUrlRewrite;
}
