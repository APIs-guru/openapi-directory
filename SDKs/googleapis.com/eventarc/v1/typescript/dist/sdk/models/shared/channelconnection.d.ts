import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A representation of the ChannelConnection resource. A ChannelConnection is a resource which event providers create during the activation process to establish a connection between the provider and the subscriber channel.
**/
export declare class ChannelConnection extends SpeakeasyBase {
    activationToken?: string;
    channel?: string;
    createTime?: string;
    name?: string;
    uid?: string;
    updateTime?: string;
}
