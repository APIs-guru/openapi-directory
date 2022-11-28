import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveChatMemberMilestoneChatDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberLevelName" })
  memberLevelName?: string;

  @SpeakeasyMetadata({ data: "json, name=memberMonth" })
  memberMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=userComment" })
  userComment?: string;
}
