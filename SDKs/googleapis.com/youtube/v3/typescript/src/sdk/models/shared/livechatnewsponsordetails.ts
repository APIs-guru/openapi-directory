import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiveChatNewSponsorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=isUpgrade" })
  isUpgrade?: boolean;

  @Metadata({ data: "json, name=memberLevelName" })
  memberLevelName?: string;
}
