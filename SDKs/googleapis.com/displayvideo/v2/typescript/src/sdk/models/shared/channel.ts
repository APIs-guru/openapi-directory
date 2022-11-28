import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Channel
/** 
 * A single channel. Channels are custom groups of related websites and apps.
**/
export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=negativelyTargetedLineItemCount" })
  negativelyTargetedLineItemCount?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=positivelyTargetedLineItemCount" })
  positivelyTargetedLineItemCount?: string;
}


// ChannelInput
/** 
 * A single channel. Channels are custom groups of related websites and apps.
**/
export class ChannelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;
}
