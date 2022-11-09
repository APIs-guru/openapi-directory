import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChannelSectionContentDetails } from "./channelsectioncontentdetails";
import { ChannelSectionLocalization } from "./channelsectionlocalization";
import { ChannelSectionSnippet } from "./channelsectionsnippet";
import { ChannelSectionTargeting } from "./channelsectiontargeting";


export class ChannelSection extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentDetails" })
  contentDetails?: ChannelSectionContentDetails;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=localizations", elemType: shared.ChannelSectionLocalization })
  localizations?: Map<string, ChannelSectionLocalization>;

  @Metadata({ data: "json, name=snippet" })
  snippet?: ChannelSectionSnippet;

  @Metadata({ data: "json, name=targeting" })
  targeting?: ChannelSectionTargeting;
}
