import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartyCreateAuthUriRequest
/** 
 * Request to get the IDP authentication URL.
**/
export class IdentitytoolkitRelyingpartyCreateAuthUriRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=authFlowType" })
  authFlowType?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: string;

  @SpeakeasyMetadata({ data: "json, name=continueUri" })
  continueUri?: string;

  @SpeakeasyMetadata({ data: "json, name=customParameter" })
  customParameter?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=hostedDomain" })
  hostedDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthConsumerKey" })
  oauthConsumerKey?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthScope" })
  oauthScope?: string;

  @SpeakeasyMetadata({ data: "json, name=openidRealm" })
  openidRealm?: string;

  @SpeakeasyMetadata({ data: "json, name=otaApp" })
  otaApp?: string;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantProjectNumber" })
  tenantProjectNumber?: string;
}
