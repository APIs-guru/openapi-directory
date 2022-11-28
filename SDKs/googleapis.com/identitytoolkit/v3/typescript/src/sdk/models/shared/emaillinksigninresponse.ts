import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailLinkSigninResponse
/** 
 * Response of email signIn.
**/
export class EmailLinkSigninResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=isNewUser" })
  isNewUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=localId" })
  localId?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
