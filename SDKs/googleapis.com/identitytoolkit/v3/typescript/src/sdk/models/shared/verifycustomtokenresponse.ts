import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VerifyCustomTokenResponse
/** 
 * Response from verifying a custom token
**/
export class VerifyCustomTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=isNewUser" })
  isNewUser?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
