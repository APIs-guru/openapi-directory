import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single channel. Channels are custom groups of related websites and apps.
**/
export declare class ChannelInput extends SpeakeasyBase {
    advertiserId?: string;
    displayName?: string;
    partnerId?: string;
}
/**
 * A single channel. Channels are custom groups of related websites and apps.
**/
export declare class Channel extends SpeakeasyBase {
    advertiserId?: string;
    channelId?: string;
    displayName?: string;
    name?: string;
    negativelyTargetedLineItemCount?: string;
    partnerId?: string;
    positivelyTargetedLineItemCount?: string;
}
