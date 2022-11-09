import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelMediaContentTypeEnum } from "./channelmediacontenttypeenum";
import { ChannelItemSortFieldEnum } from "./channelitemsortfieldenum";
import { ChannelMediaTypeEnum } from "./channelmediatypeenum";


export class ChannelFeatures extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoRefreshLevels" })
  autoRefreshLevels?: number;

  @Metadata({ data: "json, name=CanFilter" })
  canFilter?: boolean;

  @Metadata({ data: "json, name=CanSearch" })
  canSearch?: boolean;

  @Metadata({ data: "json, name=ContentTypes" })
  contentTypes?: ChannelMediaContentTypeEnum[];

  @Metadata({ data: "json, name=DefaultSortFields" })
  defaultSortFields?: ChannelItemSortFieldEnum[];

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=MaxPageSize" })
  maxPageSize?: number;

  @Metadata({ data: "json, name=MediaTypes" })
  mediaTypes?: ChannelMediaTypeEnum[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SupportsContentDownloading" })
  supportsContentDownloading?: boolean;

  @Metadata({ data: "json, name=SupportsLatestMedia" })
  supportsLatestMedia?: boolean;

  @Metadata({ data: "json, name=SupportsSortOrderToggle" })
  supportsSortOrderToggle?: boolean;
}
