import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Auth0Config
/** 
 * Configuration for Auth0 domain
**/
export class Auth0Config extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callbackUrl" })
  callbackUrl: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;
}
