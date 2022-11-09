import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddIdpCredentialRequest
/** 
 * The request for creating an IdpCredential with its associated payload. An InboundSamlSsoProfile can own up to 2 credentials.
**/
export class AddIdpCredentialRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pemData" })
  pemData?: string;
}
