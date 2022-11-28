import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChannelGroup extends SpeakeasyBase {
    autoAssign?: boolean;
}
export declare class Channel extends SpeakeasyBase {
    group?: ChannelGroup;
    groupDiscussion?: boolean;
    isBroadcastOnly?: boolean;
    privateSupport?: boolean;
    title?: string;
}
