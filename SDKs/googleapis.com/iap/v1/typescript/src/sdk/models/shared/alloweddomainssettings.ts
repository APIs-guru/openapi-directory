import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AllowedDomainsSettings
/** 
 * Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list.
**/
export class AllowedDomainsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains?: string[];

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;
}
