import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Human = "HUMAN",
    Bot = "BOT"
}


// UserInput
/** 
 * A user in Google Chat.
**/
export class UserInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserTypeEnum;
}


// User
/** 
 * A user in Google Chat.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=domainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=isAnonymous" })
  isAnonymous?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserTypeEnum;
}
