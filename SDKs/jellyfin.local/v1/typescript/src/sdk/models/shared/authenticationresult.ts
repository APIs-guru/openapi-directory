import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionInfo } from "./sessioninfo";
import { UserDto } from "./userdto";



export class AuthenticationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=SessionInfo" })
  sessionInfo?: SessionInfo;

  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: UserDto;
}
