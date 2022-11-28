import { SpeakeasyBase } from "../../../internal/utils";
import { SessionInfo } from "./sessioninfo";
import { UserDto } from "./userdto";
export declare class AuthenticationResult extends SpeakeasyBase {
    accessToken?: string;
    serverId?: string;
    sessionInfo?: SessionInfo;
    user?: UserDto;
}
