import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Channel
/** 
 * A single channel. Channels are custom groups of related websites and apps.
**/
export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=negativelyTargetedLineItemCount" })
  negativelyTargetedLineItemCount?: string;

  @Metadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @Metadata({ data: "json, name=positivelyTargetedLineItemCount" })
  positivelyTargetedLineItemCount?: string;
}
