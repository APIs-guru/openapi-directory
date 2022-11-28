import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DomainRedirectTypeEnum {
    RedirectTypeUnspecified = "REDIRECT_TYPE_UNSPECIFIED",
    MovedPermanently = "MOVED_PERMANENTLY"
}
/**
 * Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration.
**/
export declare class DomainRedirect extends SpeakeasyBase {
    domainName?: string;
    type?: DomainRedirectTypeEnum;
}
