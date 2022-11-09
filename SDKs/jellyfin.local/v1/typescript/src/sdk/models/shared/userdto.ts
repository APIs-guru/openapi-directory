import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserConfiguration } from "./userconfiguration";
import { UserPolicy } from "./userpolicy";


// UserDto
/** 
 * Class UserDto.
**/
export class UserDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configuration" })
  configuration?: UserConfiguration;

  @Metadata({ data: "json, name=EnableAutoLogin" })
  enableAutoLogin?: boolean;

  @Metadata({ data: "json, name=HasConfiguredEasyPassword" })
  hasConfiguredEasyPassword?: boolean;

  @Metadata({ data: "json, name=HasConfiguredPassword" })
  hasConfiguredPassword?: boolean;

  @Metadata({ data: "json, name=HasPassword" })
  hasPassword?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=LastActivityDate" })
  lastActivityDate?: Date;

  @Metadata({ data: "json, name=LastLoginDate" })
  lastLoginDate?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Policy" })
  policy?: UserPolicy;

  @Metadata({ data: "json, name=PrimaryImageAspectRatio" })
  primaryImageAspectRatio?: number;

  @Metadata({ data: "json, name=PrimaryImageTag" })
  primaryImageTag?: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;
}
