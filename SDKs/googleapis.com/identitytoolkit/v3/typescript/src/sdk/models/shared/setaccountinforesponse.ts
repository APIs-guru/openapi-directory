import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetAccountInfoResponseProviderUserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=federatedId" })
  federatedId?: string;

  @Metadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=providerId" })
  providerId?: string;
}


// SetAccountInfoResponse
/** 
 * Respone of setting the account information.
**/
export class SetAccountInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=emailVerified" })
  emailVerified?: boolean;

  @Metadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=localId" })
  localId?: string;

  @Metadata({ data: "json, name=newEmail" })
  newEmail?: string;

  @Metadata({ data: "json, name=passwordHash" })
  passwordHash?: string;

  @Metadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=providerUserInfo", elemType: shared.SetAccountInfoResponseProviderUserInfo })
  providerUserInfo?: SetAccountInfoResponseProviderUserInfo[];

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
