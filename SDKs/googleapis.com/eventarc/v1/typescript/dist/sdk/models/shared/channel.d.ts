import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ChannelStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
**/
export declare class Channel extends SpeakeasyBase {
    activationToken?: string;
    createTime?: string;
    cryptoKeyName?: string;
    name?: string;
    provider?: string;
    pubsubTopic?: string;
    state?: ChannelStateEnum;
    uid?: string;
    updateTime?: string;
}
