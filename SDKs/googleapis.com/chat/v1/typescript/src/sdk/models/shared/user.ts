import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Human = "HUMAN"
,    Bot = "BOT"
}


// User
/** 
 * A user in Google Chat.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=domainId" })
  domainId?: string;

  @Metadata({ data: "json, name=isAnonymous" })
  isAnonymous?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: UserTypeEnum;
}
