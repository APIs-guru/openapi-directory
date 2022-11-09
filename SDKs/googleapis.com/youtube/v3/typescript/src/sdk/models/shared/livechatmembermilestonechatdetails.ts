import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiveChatMemberMilestoneChatDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberLevelName" })
  memberLevelName?: string;

  @Metadata({ data: "json, name=memberMonth" })
  memberMonth?: number;

  @Metadata({ data: "json, name=userComment" })
  userComment?: string;
}
