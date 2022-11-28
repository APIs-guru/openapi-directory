import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetAccountInfoResponseProviderUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=federatedId" })
  federatedId?: string;

  @SpeakeasyMetadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;
}


// SetAccountInfoResponse
/** 
 * Respone of setting the account information.
**/
export class SetAccountInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=emailVerified" })
  emailVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=localId" })
  localId?: string;

  @SpeakeasyMetadata({ data: "json, name=newEmail" })
  newEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=passwordHash" })
  passwordHash?: string;

  @SpeakeasyMetadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=providerUserInfo", elemType: SetAccountInfoResponseProviderUserInfo })
  providerUserInfo?: SetAccountInfoResponseProviderUserInfo[];

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
