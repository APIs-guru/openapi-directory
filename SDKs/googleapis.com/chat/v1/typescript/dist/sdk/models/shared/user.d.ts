import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Human = "HUMAN",
    Bot = "BOT"
}
/**
 * A user in Google Chat.
**/
export declare class UserInput extends SpeakeasyBase {
    domainId?: string;
    name?: string;
    type?: UserTypeEnum;
}
/**
 * A user in Google Chat.
**/
export declare class User extends SpeakeasyBase {
    displayName?: string;
    domainId?: string;
    isAnonymous?: boolean;
    name?: string;
    type?: UserTypeEnum;
}
