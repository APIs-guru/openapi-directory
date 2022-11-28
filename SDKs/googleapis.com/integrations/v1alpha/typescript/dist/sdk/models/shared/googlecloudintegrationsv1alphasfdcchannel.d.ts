import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The SfdcChannel that points to a CDC or Platform Event Channel.
**/
export declare class GoogleCloudIntegrationsV1alphaSfdcChannelInput extends SpeakeasyBase {
    channelTopic?: string;
    description?: string;
    displayName?: string;
    isActive?: boolean;
    lastReplayId?: string;
    name?: string;
}
/**
 * The SfdcChannel that points to a CDC or Platform Event Channel.
**/
export declare class GoogleCloudIntegrationsV1alphaSfdcChannel extends SpeakeasyBase {
    channelTopic?: string;
    createTime?: string;
    deleteTime?: string;
    description?: string;
    displayName?: string;
    isActive?: boolean;
    lastReplayId?: string;
    name?: string;
    updateTime?: string;
}
