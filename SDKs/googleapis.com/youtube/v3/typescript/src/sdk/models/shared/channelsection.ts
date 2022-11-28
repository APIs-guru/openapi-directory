import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelSectionContentDetails } from "./channelsectioncontentdetails";
import { ChannelSectionLocalization } from "./channelsectionlocalization";
import { ChannelSectionSnippet } from "./channelsectionsnippet";
import { ChannelSectionTargeting } from "./channelsectiontargeting";



export class ChannelSection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentDetails" })
  contentDetails?: ChannelSectionContentDetails;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=localizations", elemType: ChannelSectionLocalization })
  localizations?: Map<string, ChannelSectionLocalization>;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: ChannelSectionSnippet;

  @SpeakeasyMetadata({ data: "json, name=targeting" })
  targeting?: ChannelSectionTargeting;
}
