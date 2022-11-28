import { SpeakeasyBase } from "../../../internal/utils";
import { UserConfiguration } from "./userconfiguration";
import { UserPolicyInput } from "./userpolicy";
import { UserPolicy } from "./userpolicy";
/**
 * Class UserDto.
**/
export declare class UserDtoInput extends SpeakeasyBase {
    configuration?: UserConfiguration;
    enableAutoLogin?: boolean;
    hasConfiguredEasyPassword?: boolean;
    hasConfiguredPassword?: boolean;
    hasPassword?: boolean;
    id?: string;
    lastActivityDate?: Date;
    lastLoginDate?: Date;
    name?: string;
    policy?: UserPolicyInput;
    primaryImageAspectRatio?: number;
    primaryImageTag?: string;
    serverId?: string;
    serverName?: string;
}
/**
 * Class UserDto.
**/
export declare class UserDto extends SpeakeasyBase {
    configuration?: UserConfiguration;
    enableAutoLogin?: boolean;
    hasConfiguredEasyPassword?: boolean;
    hasConfiguredPassword?: boolean;
    hasPassword?: boolean;
    id?: string;
    lastActivityDate?: Date;
    lastLoginDate?: Date;
    name?: string;
    policy?: UserPolicy;
    primaryImageAspectRatio?: number;
    primaryImageTag?: string;
    serverId?: string;
    serverName?: string;
}
