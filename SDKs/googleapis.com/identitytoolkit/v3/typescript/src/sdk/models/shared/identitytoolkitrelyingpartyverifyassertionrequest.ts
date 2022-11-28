import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartyVerifyAssertionRequest
/** 
 * Request to verify the IDP assertion.
**/
export class IdentitytoolkitRelyingpartyVerifyAssertionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoCreate" })
  autoCreate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingIdToken" })
  pendingIdToken?: string;

  @SpeakeasyMetadata({ data: "json, name=postBody" })
  postBody?: string;

  @SpeakeasyMetadata({ data: "json, name=requestUri" })
  requestUri?: string;

  @SpeakeasyMetadata({ data: "json, name=returnIdpCredential" })
  returnIdpCredential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=returnRefreshToken" })
  returnRefreshToken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=returnSecureToken" })
  returnSecureToken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantProjectNumber" })
  tenantProjectNumber?: string;
}
