import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SignupNewUserResponse
/** 
 * Response of signing up new user, creating anonymous user or anonymous user reauth.
**/
export class SignupNewUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=localId" })
  localId?: string;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
