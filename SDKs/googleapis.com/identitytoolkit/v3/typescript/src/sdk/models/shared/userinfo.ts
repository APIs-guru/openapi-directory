import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserInfoProviderUserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=federatedId" })
  federatedId?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=providerId" })
  providerId?: string;

  @Metadata({ data: "json, name=rawId" })
  rawId?: string;

  @Metadata({ data: "json, name=screenName" })
  screenName?: string;
}


// UserInfo
/** 
 * Template for an individual account info.
**/
export class UserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=customAttributes" })
  customAttributes?: string;

  @Metadata({ data: "json, name=customAuth" })
  customAuth?: boolean;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=emailVerified" })
  emailVerified?: boolean;

  @Metadata({ data: "json, name=lastLoginAt" })
  lastLoginAt?: string;

  @Metadata({ data: "json, name=localId" })
  localId?: string;

  @Metadata({ data: "json, name=passwordHash" })
  passwordHash?: string;

  @Metadata({ data: "json, name=passwordUpdatedAt" })
  passwordUpdatedAt?: number;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=providerUserInfo", elemType: shared.UserInfoProviderUserInfo })
  providerUserInfo?: UserInfoProviderUserInfo[];

  @Metadata({ data: "json, name=rawPassword" })
  rawPassword?: string;

  @Metadata({ data: "json, name=salt" })
  salt?: string;

  @Metadata({ data: "json, name=screenName" })
  screenName?: string;

  @Metadata({ data: "json, name=validSince" })
  validSince?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
