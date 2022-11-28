import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveChatNewSponsorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isUpgrade" })
  isUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=memberLevelName" })
  memberLevelName?: string;
}
