import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmailLinkSigninResponse
/** 
 * Response of email signIn.
**/
export class EmailLinkSigninResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=isNewUser" })
  isNewUser?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=localId" })
  localId?: string;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
