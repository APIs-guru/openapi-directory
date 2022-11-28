import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserInfoProviderUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=federatedId" })
  federatedId?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "json, name=rawId" })
  rawId?: string;

  @SpeakeasyMetadata({ data: "json, name=screenName" })
  screenName?: string;
}


// UserInfo
/** 
 * Template for an individual account info.
**/
export class UserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=customAttributes" })
  customAttributes?: string;

  @SpeakeasyMetadata({ data: "json, name=customAuth" })
  customAuth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=emailVerified" })
  emailVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastLoginAt" })
  lastLoginAt?: string;

  @SpeakeasyMetadata({ data: "json, name=localId" })
  localId?: string;

  @SpeakeasyMetadata({ data: "json, name=passwordHash" })
  passwordHash?: string;

  @SpeakeasyMetadata({ data: "json, name=passwordUpdatedAt" })
  passwordUpdatedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=providerUserInfo", elemType: UserInfoProviderUserInfo })
  providerUserInfo?: UserInfoProviderUserInfo[];

  @SpeakeasyMetadata({ data: "json, name=rawPassword" })
  rawPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=salt" })
  salt?: string;

  @SpeakeasyMetadata({ data: "json, name=screenName" })
  screenName?: string;

  @SpeakeasyMetadata({ data: "json, name=validSince" })
  validSince?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
