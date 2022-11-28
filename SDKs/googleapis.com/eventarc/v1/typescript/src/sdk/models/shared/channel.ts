import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChannelStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


// Channel
/** 
 * A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
**/
export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationToken" })
  activationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=cryptoKeyName" })
  cryptoKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ChannelStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ChannelInput
/** 
 * A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
**/
export class ChannelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cryptoKeyName" })
  cryptoKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string;
}
