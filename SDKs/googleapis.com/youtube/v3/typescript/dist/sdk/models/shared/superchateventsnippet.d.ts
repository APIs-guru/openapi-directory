import { SpeakeasyBase } from "../../../internal/utils";
import { SuperStickerMetadata } from "./superstickermetadata";
import { ChannelProfileDetails } from "./channelprofiledetails";
export declare class SuperChatEventSnippet extends SpeakeasyBase {
    amountMicros?: string;
    channelId?: string;
    commentText?: string;
    createdAt?: Date;
    currency?: string;
    displayString?: string;
    isSuperStickerEvent?: boolean;
    messageType?: number;
    superStickerMetadata?: SuperStickerMetadata;
    supporterDetails?: ChannelProfileDetails;
}
