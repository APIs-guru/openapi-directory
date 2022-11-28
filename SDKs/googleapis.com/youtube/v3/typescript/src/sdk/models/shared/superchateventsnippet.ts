import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuperStickerMetadata } from "./superstickermetadata";
import { ChannelProfileDetails } from "./channelprofiledetails";



export class SuperChatEventSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountMicros" })
  amountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=commentText" })
  commentText?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=displayString" })
  displayString?: string;

  @SpeakeasyMetadata({ data: "json, name=isSuperStickerEvent" })
  isSuperStickerEvent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=messageType" })
  messageType?: number;

  @SpeakeasyMetadata({ data: "json, name=superStickerMetadata" })
  superStickerMetadata?: SuperStickerMetadata;

  @SpeakeasyMetadata({ data: "json, name=supporterDetails" })
  supporterDetails?: ChannelProfileDetails;
}
