import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartyVerifyAssertionRequest
/** 
 * Request to verify the IDP assertion.
**/
export class IdentitytoolkitRelyingpartyVerifyAssertionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoCreate" })
  autoCreate?: boolean;

  @Metadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=pendingIdToken" })
  pendingIdToken?: string;

  @Metadata({ data: "json, name=postBody" })
  postBody?: string;

  @Metadata({ data: "json, name=requestUri" })
  requestUri?: string;

  @Metadata({ data: "json, name=returnIdpCredential" })
  returnIdpCredential?: boolean;

  @Metadata({ data: "json, name=returnRefreshToken" })
  returnRefreshToken?: boolean;

  @Metadata({ data: "json, name=returnSecureToken" })
  returnSecureToken?: boolean;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @Metadata({ data: "json, name=tenantProjectNumber" })
  tenantProjectNumber?: string;
}
