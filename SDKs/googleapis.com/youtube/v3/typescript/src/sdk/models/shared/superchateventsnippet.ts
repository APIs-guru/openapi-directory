import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuperStickerMetadata } from "./superstickermetadata";
import { ChannelProfileDetails } from "./channelprofiledetails";


export class SuperChatEventSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountMicros" })
  amountMicros?: string;

  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=commentText" })
  commentText?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=displayString" })
  displayString?: string;

  @Metadata({ data: "json, name=isSuperStickerEvent" })
  isSuperStickerEvent?: boolean;

  @Metadata({ data: "json, name=messageType" })
  messageType?: number;

  @Metadata({ data: "json, name=superStickerMetadata" })
  superStickerMetadata?: SuperStickerMetadata;

  @Metadata({ data: "json, name=supporterDetails" })
  supporterDetails?: ChannelProfileDetails;
}
