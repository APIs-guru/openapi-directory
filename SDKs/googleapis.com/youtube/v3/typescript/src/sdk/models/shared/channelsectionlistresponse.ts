import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChannelSection } from "./channelsection";


export class ChannelSectionListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=items", elemType: shared.ChannelSection })
  items?: ChannelSection[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
