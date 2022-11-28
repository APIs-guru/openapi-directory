import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelMediaContentTypeEnum } from "./channelmediacontenttypeenum";
import { ChannelItemSortFieldEnum } from "./channelitemsortfieldenum";
import { ChannelMediaTypeEnum } from "./channelmediatypeenum";
export declare class ChannelFeatures extends SpeakeasyBase {
    autoRefreshLevels?: number;
    canFilter?: boolean;
    canSearch?: boolean;
    contentTypes?: ChannelMediaContentTypeEnum[];
    defaultSortFields?: ChannelItemSortFieldEnum[];
    id?: string;
    maxPageSize?: number;
    mediaTypes?: ChannelMediaTypeEnum[];
    name?: string;
    supportsContentDownloading?: boolean;
    supportsLatestMedia?: boolean;
    supportsSortOrderToggle?: boolean;
}
