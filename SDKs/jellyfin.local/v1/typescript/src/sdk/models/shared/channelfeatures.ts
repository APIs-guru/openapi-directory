import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelMediaContentTypeEnum } from "./channelmediacontenttypeenum";
import { ChannelItemSortFieldEnum } from "./channelitemsortfieldenum";
import { ChannelMediaTypeEnum } from "./channelmediatypeenum";



export class ChannelFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoRefreshLevels" })
  autoRefreshLevels?: number;

  @SpeakeasyMetadata({ data: "json, name=CanFilter" })
  canFilter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CanSearch" })
  canSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ContentTypes" })
  contentTypes?: ChannelMediaContentTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=DefaultSortFields" })
  defaultSortFields?: ChannelItemSortFieldEnum[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxPageSize" })
  maxPageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=MediaTypes" })
  mediaTypes?: ChannelMediaTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportsContentDownloading" })
  supportsContentDownloading?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsLatestMedia" })
  supportsLatestMedia?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsSortOrderToggle" })
  supportsSortOrderToggle?: boolean;
}
