import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerifyCustomTokenResponse
/** 
 * Response from verifying a custom token
**/
export class VerifyCustomTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=isNewUser" })
  isNewUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
