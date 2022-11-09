import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AllowedDomainsSettings
/** 
 * Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list.
**/
export class AllowedDomainsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=domains" })
  domains?: string[];

  @Metadata({ data: "json, name=enable" })
  enable?: boolean;
}
