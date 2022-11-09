import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SessionInfo } from "./sessioninfo";
import { UserDto } from "./userdto";


export class AuthenticationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId?: string;

  @Metadata({ data: "json, name=SessionInfo" })
  sessionInfo?: SessionInfo;

  @Metadata({ data: "json, name=User" })
  user?: UserDto;
}
