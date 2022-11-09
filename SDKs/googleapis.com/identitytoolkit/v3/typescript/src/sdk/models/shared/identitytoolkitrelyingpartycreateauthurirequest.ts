import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartyCreateAuthUriRequest
/** 
 * Request to get the IDP authentication URL.
**/
export class IdentitytoolkitRelyingpartyCreateAuthUriRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=authFlowType" })
  authFlowType?: string;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=context" })
  context?: string;

  @Metadata({ data: "json, name=continueUri" })
  continueUri?: string;

  @Metadata({ data: "json, name=customParameter" })
  customParameter?: Map<string, string>;

  @Metadata({ data: "json, name=hostedDomain" })
  hostedDomain?: string;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=oauthConsumerKey" })
  oauthConsumerKey?: string;

  @Metadata({ data: "json, name=oauthScope" })
  oauthScope?: string;

  @Metadata({ data: "json, name=openidRealm" })
  openidRealm?: string;

  @Metadata({ data: "json, name=otaApp" })
  otaApp?: string;

  @Metadata({ data: "json, name=providerId" })
  providerId?: string;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @Metadata({ data: "json, name=tenantProjectNumber" })
  tenantProjectNumber?: string;
}
