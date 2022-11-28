import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserConfiguration } from "./userconfiguration";
import { UserPolicyInput } from "./userpolicy";
import { UserPolicy } from "./userpolicy";



// UserDtoInput
/** 
 * Class UserDto.
**/
export class UserDtoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration?: UserConfiguration;

  @SpeakeasyMetadata({ data: "json, name=EnableAutoLogin" })
  enableAutoLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasConfiguredEasyPassword" })
  hasConfiguredEasyPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasConfiguredPassword" })
  hasConfiguredPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasPassword" })
  hasPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LastActivityDate" })
  lastActivityDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastLoginDate" })
  lastLoginDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: UserPolicyInput;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImageAspectRatio" })
  primaryImageAspectRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImageTag" })
  primaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;
}


// UserDto
/** 
 * Class UserDto.
**/
export class UserDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration?: UserConfiguration;

  @SpeakeasyMetadata({ data: "json, name=EnableAutoLogin" })
  enableAutoLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasConfiguredEasyPassword" })
  hasConfiguredEasyPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasConfiguredPassword" })
  hasConfiguredPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasPassword" })
  hasPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LastActivityDate" })
  lastActivityDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastLoginDate" })
  lastLoginDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: UserPolicy;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImageAspectRatio" })
  primaryImageAspectRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImageTag" })
  primaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;
}
