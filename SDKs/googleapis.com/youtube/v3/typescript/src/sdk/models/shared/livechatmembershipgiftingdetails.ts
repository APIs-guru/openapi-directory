import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveChatMembershipGiftingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=giftMembershipsCount" })
  giftMembershipsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=giftMembershipsLevelName" })
  giftMembershipsLevelName?: string;
}
