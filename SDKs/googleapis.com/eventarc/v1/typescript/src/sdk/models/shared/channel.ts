import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChannelStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


// Channel
/** 
 * A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
**/
export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=activationToken" })
  activationToken?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=cryptoKeyName" })
  cryptoKeyName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=provider" })
  provider?: string;

  @Metadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @Metadata({ data: "json, name=state" })
  state?: ChannelStateEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
