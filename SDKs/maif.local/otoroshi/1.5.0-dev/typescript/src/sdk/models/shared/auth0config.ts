import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Auth0Config
/** 
 * Configuration for Auth0 domain
**/
export class Auth0Config extends SpeakeasyBase {
  @Metadata({ data: "json, name=callbackUrl" })
  callbackUrl: string;

  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @Metadata({ data: "json, name=domain" })
  domain: string;
}
