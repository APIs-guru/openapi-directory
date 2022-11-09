import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DomainRedirectTypeEnum {
    RedirectTypeUnspecified = "REDIRECT_TYPE_UNSPECIFIED"
,    MovedPermanently = "MOVED_PERMANENTLY"
}


// DomainRedirect
/** 
 * Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration.
**/
export class DomainRedirect extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=type" })
  type?: DomainRedirectTypeEnum;
}
